import React, { Component } from 'react';
import ConsumptionCard from '../../Components/ConsumptionCard/ConsumptionCard'
import './ConsumptionsContainer.css'

class ConsumptionsContainer extends Component {

    state = {
        consumptions: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/consumptions/')
            .then(response => response.json())
            .then((data) => {
                this.setState({consumptions: data})
        })
    }
    handleDelete = (id) => {
        fetch(`http://localhost:3001/consumptions/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then((data) => {
            let copy = [...this.state.consumptions]
            let index = copy.indexOf(data)
            copy.splice(index, 1)
            this.setState({
                consumptions: copy
            })
            // this.props.history.push("/profile")
        }
        )
    }

    renderCards = () => {
            return this.state.consumptions.map(consumption => <ConsumptionCard consumptionObj={consumption} id={consumption.id} handleDelete={this.handleDelete} dishesOptions={this.props.dishesOptions} dishName={consumption.dish}/>)
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
