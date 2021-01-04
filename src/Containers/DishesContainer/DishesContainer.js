import React, { Component } from 'react';
import "./DishesContainer.css";
import DishCard from '../../Components/DishCard/DishCard'
import DishForm from '../../Components/DishForm/DishForm'

// import { Link } from 'react-router-dom'


class DishesContainer extends Component {
    state={
        status:false
    }

    changeStatus = () => {
        this.setState({
            status: !this.state.status
        })
        console.log(this.state)
    }


    renderDishCards = () => {
        return (this.props.dishesOptions.map(dish => <DishCard dishObj={dish} id={dish.id}/>))
    }

    render()
    { console.log(this.props.dishesOptions)
        return(
            <div>
            <button className="update-dish-btn" onClick={this.changeStatus} >      Add a Dish to your library!</button>
            {/* <div>{this.state.status ? <DishForm dishObj={this.props.dishObj} />  : null }</div> */}
            {this.renderDishCards()}
            </div>
        )
    }
}

export default DishesContainer