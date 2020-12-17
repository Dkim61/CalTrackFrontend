import React, { Component } from 'react';
import './ConsumptionForm.css'
import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom';



class ConsumptionForm extends Component {

    state = {
        user_id: 1
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
                
        this.setState({name: "", description: "", date:"", id: 1})
        window.location.reload();
    }
   
    
    render() {
        return (
            <div className='consumption-form-wrapper'>
                <form onSubmit={this.localSubmitHandler}>
                    <h2>Consume!</h2>
                    <input className='dish-input' name='name' type='text' placeholder='Enter Consumtion Id?' onChange={this.changeHandler} value={this.state.name}/> <br/>
                    <input className='servings-input' name='servings' type='text' placeholder='Servings' onChange={this.changeHandler} value={this.state.description}/> <br/>
                    <input className='date-input' name='date' type='date' placeholder='Date' onChange={this.changeHandler} value={this.state.date}/> <br/>
                    <button className='consume-submit-btn' type='submit'>Submit</button><br/>
                </form>
            
            </div>
        );
    }
    
}

export default ConsumptionForm;