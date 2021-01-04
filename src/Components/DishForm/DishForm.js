import React, { Component } from 'react';
import './DishForm.css'

class DishForm extends Component {
    state={
        name: "",
        image: "",
        imageType: "",
        calories: 0,
        protein: "",
        fat: "",
        carbs: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("Consumption Form Handler", this.state)
    }
    
    render() {
        return(
            <div className='consumption-form-wrapper'>
            <form onSubmit={this.localSubmitHandler}>

            <input className='servings-input' name='servings' type='number' placeholder='Servings' onChange={this.changeHandler} value={this.state.servings}/> <br/>
            </form>
            
            </div>
            )
    }
}

export default DishForm