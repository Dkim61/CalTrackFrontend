import React, { Component } from 'react';
import './ConsumptionForm.css'
import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom';
import axios from 'axios'
import Select from 'react-select'




class ConsumptionForm extends Component {

    state = {
        selectOptions : [],
        user_id: 1,
        dish_id: 0,
        servings: 0,
        date: ""
    }

    

    async getOptions(){
        const res = await axios.get('http://localhost:3001/dishes/')
        const data = res.data
        console.log(data)

    
        const options = data.map(d => ({
          "value" : d.id,
          "label" : d.name
    
        }))
    
        this.setState({selectOptions: options})
    
      }
     
    
     componentDidMount(){
      this.getOptions()
      }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("Consumption Form Handler", this.state)
    }

 handleCollectionChange(e){
    this.setState({dish_id:e.value, name:e.label})
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
        console.log(this.state.selectOptions)
        return (
            <div className='consumption-form-wrapper'>
                <form onSubmit={this.localSubmitHandler}>
                    <h2>Consume!</h2>
                    <h4>Select your Dish:</h4>
                    <Select options={this.state.selectOptions} onChange={this.handleCollectionChange.bind(this)}/>
                    <h4>Select your servings:</h4>
                    <input className='servings-input' name='servings' type='number' placeholder='Servings' onChange={this.changeHandler} value={this.state.servings}/> <br/>
                    <h4>Choose your date:</h4>
                    <input className='date-input' name='date' type='date' placeholder='Date' onChange={this.changeHandler} value={this.state.date}/> <br/>
                    <button className='consumption-submit-btn' type='submit'>Submit</button><br/>
                </form>
            
            </div>
        );
    }
    
}

export default ConsumptionForm;