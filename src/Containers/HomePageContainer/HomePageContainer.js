import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './HomePageContainer.css'
import RouteContainer from '../RouteContainer/RouteContainer'

// import { Route } from 'react-router-dom'

class HomePageContainer extends Component {

    state= {
        UserApi: [],
        DishApi: []
      }
    
      componentDidMount(){
        Promise.all([
        fetch('http://localhost:3001/users/1'), 
        fetch('http://localhost:3001/dishes')
        ])
        .then(([res1, res2]) => {
        return Promise.all([res1.json(),res2.json()])
        })
        .then(([data1, data2]) => {
          this.setState({
            UserApi:data1,
            DishApi:data2
          })
        })
      }

      handleDelete = (id) => {
        fetch(`http://localhost:3001/dishes/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then((data) => {
            let copy = [...this.state.DishApi]
            let index = copy.indexOf(data)
            copy.splice(index, id)
            this.setState({
              DishApi: copy
            })
            // this.props.history.push("/profile")
        }
        )
        window.location.reload()
    }
      

    render() {
      console.log(this.state)
        return (
            <div className="homepage-container">
                <Sidebar />
                <RouteContainer userInfo={this.state.UserApi} dishesInfo={this.state.DishApi} handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default HomePageContainer;
