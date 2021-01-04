import React, { Component } from 'react';
import "./DishesContainer.css";
import DishCard from '../../Components/DishCard/DishCard'
import DishForm from '../../Components/DishForm/DishForm'
import Select from 'react-select'
import axios from 'axios'

// import { Link } from 'react-router-dom'


class DishesContainer extends Component {
    state={
        status:false,
        selectOptions : [],
        id: "",
        name: ""

    }

    async getOptions(){
        const res = await axios.get('http://localhost:3001/dishes/')
        const data = res.data
    
        const options = data.map(d => ({
          "value" : d.id,
          "label" : d.name
        }))
        this.setState({selectOptions: options})
      }

    changeStatus = () => {
        this.setState({
            status: !this.state.status
        })
        console.log(this.state)
    }

    handleChange(e){
        this.setState({id:e.value, name:e.label})
   }


    renderDishCards = () => {
        return (this.props.dishesOptions.map(dish => <DishCard dishObj={dish} id={dish.id}/>))
    }


    componentDidMount(){
        this.getOptions()
    }

    render()
    { console.log(this.state)
        return(
            <div>
            <button className="update-dish-btn" onClick={this.changeStatus} >      Add a Dish to your library!</button>
            <div>{this.state.status ? <DishForm />  : null }</div>
            {/* {this.renderDishCards()} */}
            <div>
            <h3>Search for your Dish!</h3>
            <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
            </div>
            {this.state.id? <DishCard id={this.state.id} dishesOptions={this.props.dishesOptions} handleDelete={this.props.handleDelete}/> : null }
            </div>
            
        )
    }
}

export default DishesContainer