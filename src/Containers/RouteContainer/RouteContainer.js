  
import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import ProfilePageContainer from '../ProfilePageContainer/ProfilePageContainer'
import NotFound from '../../Components/404/NotFound'
import LoginContainer from '../LoginContainer/LoginContainer'
import ConsumptionPageContainer from '../ConsumptionPageContainer/ConsumptionPageContainer';
import AddConsumptionContainer from '../AddConsumptionContainer/AddConsumptionContainer.js'
import ConsumptionsContainer from '../ConsumptionsContainer/ConsumptionsContainer';




class RouteContainer extends Component {



    // renderConsumptions = (props) => {
    //     let consumptionId = parseInt(props.match.params.id)
    //     console.log("Consumption ID", consumptionId)
    //     let foundConsumption = this.state.consumptions.find(consumptionObj => consumptionObj.id === consumptionId)
    //     console.log("FOUND CONSUMPTION", foundConsumption)
    //     return (foundConsumption ? <ConsumptionPageContainer consumption={foundConsumption}/> : <NotFound />)
    // }
  

    render() {
        console.log(this.props.dishesInfo)
        return (
                <div className="routes">
                <Switch>
                    <Route exact path="/" render={() => <LoginContainer/>} />
                    <Route path="/add" render={() => <AddConsumptionContainer dishesAPI={this.props.dishesInfo} dishesOptions={this.props.dishesOptions}/>} />
                    <Route path="/profile" render={() => <ProfilePageContainer userAPI={this.props.userInfo} dishesOptions={this.props.dishesInfo} />}/>
                    <Route path="/consumptions" render={() => <ConsumptionsContainer dishesOptions={this.props.dishesOptions} />}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(RouteContainer);