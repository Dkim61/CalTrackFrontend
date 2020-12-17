import React, { Component } from 'react';
import Login from '../../Components/Login/Login'
import './LoginContainer.css'

class LoginContainer extends Component {
    
    render() {
        return (
            <div className="login-container">
                <Login />
            </div>
        );
    }
}

export default LoginContainer;
