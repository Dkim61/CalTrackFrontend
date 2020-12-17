import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './HomePageContainer.css'
import RouteContainer from '../RouteContainer/RouteContainer'

// import { Route } from 'react-router-dom'

class HomePageContainer extends Component {

    state= {
        UserApi: []
      }
    
      componentDidMount(){
        fetch('http://localhost:3001/users/2')
          .then(resp => resp.json())
          .then((userData) => {
            this.setState({
              UserApi: userData
            })
          })
    }
      

    render() {
        return (
            <div className="homepage-container">
                <Sidebar />
                <RouteContainer userInfo={this.state.UserApi} />
                {/* <LoginContainer /> */}
                {/* <WorkoutForm /> */}
            </div>
        );
    }
}

export default HomePageContainer;
