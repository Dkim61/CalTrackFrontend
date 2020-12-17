  
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProfilePage from '../ProfilePageContainer/ProfilePageContainer'
import NotFound from '../../Components/404/NotFound'
import LoginContainer from '../LoginContainer/LoginContainer'
import ConsumptionPageContainer from '../ConsumptionPageContainer/ConsumptionPageContainer';
import AddConsumptionContainer from '../AddConsumptionContainer/AddConsumptionContainer.js'




class RouteContainer extends Component {

    state = {
       consumptions : [],
    }

    componentDidMount() {
        fetch('http://localhost:3001/consumptions/')
            .then(response => response.json())
            .then((data) => {
                this.setState({consumptions: data})
        })
    }


    renderConsumptions = (props) => {
        let consumptionId = parseInt(props.match.params.id)
        console.log("Consumption ID", consumptionId)
        let foundConsumption = this.state.consumptions.find(consumptionObj => consumptionObj.id === consumptionId)
        console.log("FOUND CONSUMPTION", foundConsumption)
        return (foundConsumption ? <ConsumptionPageContainer consumption={foundConsumption}/> : <NotFound />)
    }
  

    render() {
        console.log(this.props.userInfo)
        console.log(this.state.consumptions)
        return (
                <div className="routes">
                <Switch>
                    <Route exact path="/" render={() => <LoginContainer/>} />
                    <Route path="/add" render={() => <AddConsumptionContainer />} />
                    <Route path="/profile" render={() => <ProfilePage userAPI={this.props.userInfo} />}/>
                    <Route path='/consumptions/:id' render={routerProps => this.renderConsumptions(routerProps)} />
                    <Route component={NotFound} />
                </Switch>
        
            </div>
        );
    }
}

export default RouteContainer;