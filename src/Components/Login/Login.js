import React, { Component } from 'react';
import './Login.css'

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("Change Handler", this.state)
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.setState({username: "", password: ""})
    }


    
    render() {
        return (
            <div className="login-wrapper" onSubmit={this.localSubmitHandler}>
                <form className="login-form">
                    <input className="login-input" name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.changeHandler}/> <br/>
                    <input className="login-input" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/> <br/>
                    <button id="login-btn" type="submit" >Login</button> <br/>
                    <button id="signup-btn" type="submit" >Sign Up</button>
                </form>
    
            </div>
        );
    }
}

export default Login;
