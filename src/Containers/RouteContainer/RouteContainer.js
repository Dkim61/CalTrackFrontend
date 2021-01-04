  
import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import ProfilePageContainer from '../ProfilePageContainer/ProfilePageContainer'
import NotFound from '../../Components/404/NotFound'
import LoginContainer from '../LoginContainer/LoginContainer'
import ConsumptionPageContainer from '../ConsumptionPageContainer/ConsumptionPageContainer';
import AddConsumptionContainer from '../AddConsumptionContainer/AddConsumptionContainer.js'
import ConsumptionsContainer from '../ConsumptionsContainer/ConsumptionsContainer';
import DishesContainer from '../DishesContainer/DishesContainer';
import DishCard from '../../Components/DishCard/DishCard'





class RouteContainer extends Component {



    // renderDishes = (routerProps) => {
    //     let dishId = parseInt(routerProps.match.params.id)
    //     console.log("Dish ID", dishId)
    //     let foundDish = this.props.dishesInfo.find(dish => dish.id === dishId)
    //     console.log("FOUND DISH", foundDish)
    //     return (foundDish ? <DishCard dishObj={foundDish}/> : <NotFound />)
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
                    <Route path="/dishes" render={() => <DishesContainer dishesOptions={this.props.dishesInfo} />}/>
                    {/* <Route path='/dishes/:id' render={routerProps => this.renderDishes(routerProps)} /> */}
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(RouteContainer);