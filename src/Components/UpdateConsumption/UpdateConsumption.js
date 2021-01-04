import React, { Component } from 'react';
import axios from 'axios'
import Select from 'react-select'

class UpdateConsumption extends Component {


    state = {
        user_id: 1,
        dish_id: 0,
        servings: 0,
        date: this.props.consumptionObj.consumption.date,
        id: 0
    }

    componentDidMount(){
        this.setState({
            id: this.props.id
        })
    }
    
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("Update Consumption Form Handler", this.state)
    }

    handleCollectionChange(e){
        this.setState({dish_id:e.value, name:e.label})
    }



    handleUpdateConsumption = (e) => {
        e.preventDefault()
        // localStorage.setItem("dishId", this.state.dish_id)
        // localStorage.setItem("servings", this.state.servings)
        this.props.consumptionUpdate(this.state)
        // this.props.formCloser()
    }


    render() {
        console.log("000000000", this.state);
        console.log("000000000", this.props.dishesOptions);
        return (
            <div className='consumption-form'>
                <form onSubmit={this.handleUpdateConsumption}>
                    <h2>UPDATE CONSUMPTION</h2>
                    <Select options={this.props.dishesOptions} placeholder='Select Food' onChange={this.handleCollectionChange.bind(this)}/>
                    <div>Servings: <input className='servings-input' name='servings' type='number' placeholder='Enter Servings' value={this.state.servings} onChange={this.changeHandler}/> </div><br/>
                    {/* <input className='date-input' name='date' type='text' placeholder='Date' value={this.state.date} onChange={this.changeHandler}/> <br/> */}
                    <button id="submit-btn" type="submit" >Submit</button> 
                </form>
            </div>
        );


    }
}

export default UpdateConsumption;