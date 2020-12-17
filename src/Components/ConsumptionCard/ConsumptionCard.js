import React, { Component } from 'react';
import './ConsumptionCard.css'

class ConsumptionCard extends Component {
    render() {
        return (
            <div className="consumption-card">
                <h1 className="consumption-name">{this.props.id}</h1>
            </div>
        );
    }
}

export default ConsumptionCard;