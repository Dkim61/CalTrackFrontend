
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ConsumptionsContainer from '../ConsumptionsContainer/ConsumptionsContainer';
import './ProfilePageContainer.css'

class ProfilePage extends Component {
    render() 
    {
        console.log(this.props.userAPI)
        return (
            <div className="profile-page">
                <h2 className="username">Welcome, {this.props.userAPI.username}</h2>


            <div className='info-page'>

                <div className='img-container'>
                    <img src={this.props.userInfo} alt={this.props.userInfo} className="profile-img" />
                 </div>
                
                    
                 <div className="about-me-container">
                        <div className='about-me-info'>
                            <h3 className="about-me-title">About Me</h3>
                            <h4 className="name-title">Name</h4>
                            <p>{this.props.userAPI.first_name} {this.props.userAPI.last_name}</p>
                            <h4 className="calorie-limit-title">Calorie Limit</h4>
                            <p>{this.props.userAPI.calorie_limit}</p>
                            <h4 className="goal-weight-title">Goal Weight</h4>
                            <p>{this.props.userAPI.goal_weight} </p>
                            <h4 className="weight-title">Current Weight</h4>
                            <p>{this.props.userAPI.weight}</p>
                            <h4 className="height-title">Height</h4>
                            <p>{this.props.userAPI.height}</p>
                            <h4 className="BMI-title">BMI</h4>
                            <p></p>
                            <h4 className="starting-weight-title">Starting Weight</h4>
                            <p>{this.props.userAPI.starting_weight}</p>
                            <h4 className="starting-date-title">Starting Date</h4>
                            <p>{this.props.userAPI.starting_date}</p>
                            <h4 className="starting-weight-title">Starting Weight</h4>
                            <p>{this.props.userAPI.weight}</p>
                        </div>
                 </div>
                 <div className="consumption-container">
                    <ConsumptionsContainer/>
                 </div>
            </div>


             

            </div>
        );
    }
}

export default ProfilePage;