import React, { Component } from 'react';
import ConsumptionForm from '../../Components/ConsumptionForm/ConsumptionForm'
import './AddConsumptionContainer.css'

class AddConsumptionContainer extends Component {
    render() {
        return (
            <div className='default-page'>
                <ConsumptionForm dishesOptions={this.props.dishesOptions}/>
            </div>
        );
    }
}

export default AddConsumptionContainer;