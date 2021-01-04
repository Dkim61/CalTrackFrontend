import React, { Component } from 'react';
import './DishCard.css';
import { Link } from 'react-router-dom';


class DishCard extends Component {
    
    render() {
        let dishes = this.props.dishesOptions
        let foundDish =dishes.find(dish => dish.id === this.props.id)
        console.log(foundDish)
        return(
            <div>
                <h3>{foundDish.name}</h3>
                <h3>{foundDish.calories}</h3>
                <h3>{foundDish.protein}</h3>
                <h3>{foundDish.fat}</h3>
                <h3>{foundDish.carbs}</h3>

                <Link to="/dishes"><button className='delete-dish-btn' onClick={() => this.props.handleDelete(this.props.id)} >Delete Consumption</button></Link>


            </div>
        )
    }
}

export default DishCard