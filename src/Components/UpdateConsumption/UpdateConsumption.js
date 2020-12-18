import React, { Component } from 'react';

class UpdateConsumption extends Component {


    state = {
        user_id: 1,
        dish_id: 0,
        servings: 0,
        date: "",
        id: this.props.consumption_id
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("Update Consumption Form Handler", this.state)
    }


    exerciseConsumptionUpdate = (e) => {
        e.preventDefault()
        const config = {
            method: 'PATCH',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`http://localhost:3001/consumptions/${this.state.id}`, config)
        .then(response => response.json())
        .then(data => console.log(data))
        this.setState({name: "", description: "", difficulty: '', rep: '', weight: '', set: '', workout_id: this.props.id})
        window.location.reload();
    }

    render() {
        console.log("000000000", this.state)
        return (
            <div className='exercise-form'>
                <form onSubmit={this.exerciseConsumptionUpdate}>
                    <h2>UPDATE EXERCISE</h2>
                    <input className='dishid-input' name='dish_id' type='number' placeholder='Enter Dish_id' value={this.state.dish_id} onChange={this.changeHandler}/> <br/>
                    <input className='servings-input' name='servings' type='number' placeholder='Enter Servings' value={this.state.servings} onChange={this.changeHandler}/> <br/>
                    <input className='date-input' name='date' type='text' placeholder='Enter Date' value={this.state.date} onChange={this.changeHandler}/> <br/>
                    <button id="submit-btn" type="submit" >Submit</button> 
                </form>
            </div>
        );


    }
}

export default UpdateConsumption;
