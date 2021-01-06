import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProfileConsumptionContainer from '../ProfileConsumptionContainer/ProfileConsumptionContainer';
import './ProfilePageContainer.css'

class ProfilePageContainer extends Component {

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
            let index = copy.findIndex(c => c.consumption.id === id)
            copy.splice(index, 1)
            console.log("DELETED", copy)
            console.log("ID", id)
            this.setState({
                consumptions: copy
            })
            // this.props.history.push("/profile")
        }
        )
    }

    consumptionUpdate = (consumptionObj) => {
        const config = {
            method: 'PATCH',
            body: JSON.stringify(consumptionObj),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`http://localhost:3001/consumptions/${consumptionObj.id}`, config)
        .then(response => response.json())
        .then(data => {
            // let consumptionsArray=[...this.state.consumptions]
            // console.log(consumptionsArray)
            // let consumptionIndex = consumptionsArray.findIndex(c => c.id === data.id)
            // consumptionsArray.splice(consumptionIndex, 1, data)
            // console.log(consumptionsArray)
            // this.setState({
            //     consumptions: consumptionsArray
            fetch('http://localhost:3001/consumptions/')
            .then(response => response.json())
            .then((data) => {
                this.setState({consumptions: data})
            })
        // this.setState({dish_id: 0, servings: 0, date: "", id: 0})
        } )
    }
  

    render() 
    {
        return (
            <div className="profile-page">
                <h2 className="username">Welcome, {this.props.userAPI.username}</h2>


            <div className='info-page'>

                <div className='img-container'>
                    <img src={this.props.userAPI.profile_picture} alt={this.props.userInfo} className="profile-img" />
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
                 {/* <div className="consumption-container">
                    <ConsumptionsContainer dishesOptions={this.props.dishesOptions}/>
                 </div> */}
                  <div className="profile-consumption-container">
                    <ProfileConsumptionContainer consumptionApi={this.state.consumptions} handleDelete={this.handleDelete} consumptionUpdate={this.consumptionUpdate} dishesOptions={this.props.dishesOptions} />
                 </div>
            </div>


             

            </div>
        );
    }
}

export default ProfilePageContainer;