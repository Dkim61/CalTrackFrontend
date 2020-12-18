import React, { Component } from 'react';
import './ConsumptionCard.css'
import { Link } from 'react-router-dom';
import UpdateConsumption from '../UpdateConsumption/UpdateConsumption.js'

class ConsumptionCard extends Component {
    state = {
        status: false
    }

    handleDelete = (e) => {
        fetch(`http://localhost:3001/consumptions/${this.props.id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then((resp) => [
        ])
        window.location.reload();
    }
    changeStatus = () => {
        this.setState({
            status: !this.state.status
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="consumption-card">
                <h1 className="consumption-id">{this.props.id}</h1>
                <h1 className="consumption-date">{this.props.date}</h1>
                <button className="update-consumption-btn" onClick={this.changeStatus} >Update Exercise</button>
                <div>{this.state.status ? <UpdateConsumption consumption={this.props.consumption} consumption_id={this.props.id} />  : null }</div>
                <Link to="/profile"><button className='delete-consumption-btn' onClick={this.handleDelete} >Delete Consumption</button></Link>
            </div>
        );
    }
}

export default ConsumptionCard;