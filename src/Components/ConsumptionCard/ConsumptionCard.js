import React, { Component } from 'react';
import './ConsumptionCard.css'
import { Link } from 'react-router-dom';
import UpdateConsumption from '../UpdateConsumption/UpdateConsumption.js'

class ConsumptionCard extends Component {
    state = {
        status: false,
        selectOptions : []
    }

    componentDidMount(){
        this.setState({
            selectOptions : this.props.dishesOptions
        })
    }
  
    changeStatus = () => {
        this.setState({
            status: !this.state.status
        })
        console.log(this.state)
    }

    render() {
        console.log(this.props.consumptionObj.consumpti)
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
                <button className="update-consumption-btn" onClick={this.changeStatus} >Update Consumption</button>
                <div>{this.state.status ? <UpdateConsumption consumption={this.props.consumption} consumption_id={this.props.id} dishesOptions={this.props.dishesOptions} />  : null }</div>
                <Link to="/profile"><button className='delete-consumption-btn' onClick={() => this.props.handleDelete(this.props.id)} >Delete Consumption</button></Link>
            </div>
        );
    }
}

export default ConsumptionCard;