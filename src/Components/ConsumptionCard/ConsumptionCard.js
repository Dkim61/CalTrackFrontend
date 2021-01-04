import React, { Component } from 'react';
import './ConsumptionCard.css'
import { Link } from 'react-router-dom';
import UpdateConsumption from '../UpdateConsumption/UpdateConsumption.js'
import axios from 'axios'
import Select from 'react-select'


class ConsumptionCard extends Component {
    state = {
        status: false,
        selectOptions : []
    }

    // componentDidMount(){
    //     this.setState({
    //         selectOptions : this.props.dishesOptions
    //     })
    // }

    async getOptions(){
        const res = await axios.get('http://localhost:3001/dishes/')
        const data = res.data
    
        const options = data.map(d => ({
          "value" : d.id,
          "label" : d.name
    
        }))
    
        this.setState({selectOptions: options})
    
      }
  
    changeStatus = () => {
        this.setState({
            status: !this.state.status
        })
        console.log(this.state)
    }

    componentDidMount(){
        this.getOptions()
    }

    formCloser = () => {
        this.setState({
        status: false
        })
    }

    localHandleDelete = () => {
        // console.log(this.props.consumptionObj.consumption.id)
        this.props.handleDelete(this.props.consumptionObj.consumption.id)
    }

    render() {
        console.log("CARD'S ID:", this.props.consumptionObj.consumption.id);
        console.log(this.state)
        // let totalCals= document.getElementById('consumption-card').getElementsByClassName('consumption-total-calories');
        // console.log(totalCals)
        // this.props.addCals(this.props.consumptionObj.consumption.dish.calories * this.props.consumptionObj.consumption.servings)
        return (
            <div className="consumption-card">
                <div>Date:
                <h2 className="consumption-date">{this.props.consumptionObj.consumption.date}</h2>
                </div>
                <div>Dish:
                <h2 className="dish-name">{this.props.consumptionObj.consumption.dish.name}</h2>
                </div>
                <div>Servings:
                <h2 className="consumption-servings">{this.props.consumptionObj.consumption.servings}</h2>
                </div>
                <div>Dish's Calories:
                <h2 className="consumption-dish-calories">{this.props.consumptionObj.consumption.dish.calories}</h2>
                </div>
                <div>Total Calories:
                <h2 className="consumption-total-calories">{this.props.consumptionObj.consumption.dish.calories * this.props.consumptionObj.consumption.servings}</h2>
                </div>
                <button className="update-consumption-btn" onClick={this.changeStatus} >Update Consumption</button>
                <div>{this.state.status ? <UpdateConsumption consumptionObj={this.props.consumptionObj} id={this.props.consumptionObj.consumption.id} dishesOptions={this.state.selectOptions} consumptionUpdate={this.props.consumptionUpdate} formCloser={this.formCloser}/>  : null }</div>
                <button className='delete-consumption-btn' onClick={this.localHandleDelete} >Delete Consumption</button>
            </div>
        );
    }
}

export default ConsumptionCard;