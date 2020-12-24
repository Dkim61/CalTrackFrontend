import React, { Component } from 'react';
import axios from 'axios'
import Select from 'react-select'

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

    handleCollectionChange(e){
        this.setState({dish_id:e.value, name:e.label})
    }


    consumptionUpdate = (e) => {
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
        .then(data => console.log("IN UPDATE", data))
        this.setState({dish_id: 0, servings: 0, date: "", id: 0})
        window.location.reload();
    }
    


    render() {
        console.log("000000000", this.state)
        return (
            <div className='consumption-form'>
                <form onSubmit={this.consumptionUpdate}>
                    <h2>UPDATE CONSUMPTION</h2>
                    <Select options={this.props.dishesOptions} placeholder='Select Food' onChange={this.handleCollectionChange.bind(this)}/>
                    <div>Servings: <input className='servings-input' name='servings' type='number' placeholder='Enter Servings' value={this.state.servings} onChange={this.changeHandler}/> </div><br/>
                    <input className='date-input' name='date' type='text' placeholder='Date' value={this.state.date} onChange={this.changeHandler}/> <br/>
                    <button id="submit-btn" type="submit" >Submit</button> 
                </form>
            </div>
        );


    }
}

export default UpdateConsumption;
