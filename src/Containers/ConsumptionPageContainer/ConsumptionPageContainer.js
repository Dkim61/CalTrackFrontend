import React, { Component } from 'react';
import './ConsumptionPageContainer.css'
import { Link } from 'react-router-dom';

class ConsumptionPageContainer extends Component {

    state = {
        consumption_id: this.props.consumption.id
    }

    handleDelete = (e) => {
        fetch(`http://localhost:3001/consumptions/${this.state.consumption_id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then((resp) => [
        ])
        window.location.reload();
    }

   
    render() {
        console.log("THIS IS THIS PAGE'S ID ",this.props.consumption.id)
        return (
            <div className="consumption-page">
           
            <div className='topbar-wrapper'>
                <h1 className="consumption-title">{this.props.consumption.name}</h1>
                <Link to="/home" className='delete-btn-wrapper'><button className='delete-consumption-btn' onClick={this.handleDelete} >Delete Consumption</button></Link>
            </div>
                   
            </div>
        
                
            
        );
    }
}

export default ConsumptionPageContainer;