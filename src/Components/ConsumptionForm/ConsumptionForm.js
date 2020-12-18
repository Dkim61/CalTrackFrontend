import React, { Component } from 'react';
import './ConsumptionForm.css'
import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom';



class ConsumptionForm extends Component {

    state = {
        user_id: 1,
        dish_id: 0,
        servings: 0,
        date: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("Consumption Form Handler", this.state)
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const config = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                        'Content-Type': 'application/json'
                    }
                }
                fetch('http://localhost:3001/consumptions/', config)
                .then(response => response.json())
                .then(data => console.log(data))
                
        this.setState({     
            user_id: 1,
            dish_id: 0,
            servings: 0,
            date: ""})
    }
   
    
    render() {
        return (
            <div className='consumption-form-wrapper'>
                <form onSubmit={this.localSubmitHandler}>
                    <h2>Consume!</h2>
                    <input className='dishId-input' name='dish_id' type='number' placeholder='dish_id' onChange={this.changeHandler} value={this.state.dish_id}/> <br/>
                    <input className='servings-input' name='servings' type='number' placeholder='Servings' onChange={this.changeHandler} value={this.state.servings}/> <br/>
                    <input className='date-input' name='date' type='text' placeholder='Date' onChange={this.changeHandler} value={this.state.date}/> <br/>
                    <button className='consumption-submit-btn' type='submit'>Submit</button><br/>
                </form>
            
            </div>
        );
    }
    
}

export default ConsumptionForm;