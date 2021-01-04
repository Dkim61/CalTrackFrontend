import React, { Component } from 'react';
import './DishCard.css';

class DishCard extends Component {
    render() {
        return(
            <div>
                <h3>{this.props.dishObj.name}</h3>
            </div>
        )
    }
}

export default DishCard