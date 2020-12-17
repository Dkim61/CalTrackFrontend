import React, { Component } from 'react';
import ConsumptionCard from '../../Components/ConsumptionCard/ConsumptionCard'
import './ConsumptionsContainer.css'

class ConsumptionsContainer extends Component {

    state = {
        consumptions: []
    }

    componentDidMount(){
        fetch('http://localhost:3001/consumptions/')
        .then(response => response.json())
        .then((data) => {
            this.setState({consumptions: data})
        })
    }

    renderCards = () => {
            return this.state.consumptions.map(consumption => <ConsumptionCard id={consumption.id} />)
    }



    render() {
        return (
                 <div className="top-container">
                    <h1 className="title">My Consumptions:</h1>
                        <div className="consumption-card-container">
                            {this.renderCards()}
                        </div>
                </div>
        );
    }
}

export default ConsumptionsContainer;
