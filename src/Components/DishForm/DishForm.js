import React, { Component } from 'react';
import './DishForm.css'

class DishForm extends Component {
    state={
        name: "",
        image: "",
        imageType: "",
        calories: 0,
        protein: "",
        fat: "",
        carbs: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("Dish Form Handler", this.state)
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const config = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                        'Content-Type': 'application/json'
                    }
                }
                fetch('http://localhost:3001/dishes/', config)
                .then(response => response.json())
                .then(data => console.log(data))
                
        this.setState({     
            name: "",
            image: "",
            imageType: "",
            calories: 0,
            protein: "",
            fat: "",
            carbs: ""
        })
        window.location.reload();
    }
    
    render() {
        return(
            <div className='dish-form-wrapper'>
            <form onSubmit={this.localSubmitHandler}>
            <input className='name-input' name='name' type='text' placeholder='Name' onChange={this.changeHandler} value={this.state.name}/> <br/>
            <input className='image-input' name='image' type='text' placeholder='Image URL' onChange={this.changeHandler} value={this.state.image}/> <br/>
            <input className='imageType-input' name='imageType' type='text' placeholder='Image Type' onChange={this.changeHandler} value={this.state.imageType}/> <br/>
            <input className='calories-input' name='calories' type='number' placeholder='Calories' onChange={this.changeHandler} value={this.state.calories}/> <br/>
            <input className='protein-input' name='protein' type='text' placeholder='protein' onChange={this.changeHandler} value={this.state.protein}/> <br/>
            <input className='fat-input' name='fat' type='text' placeholder='fat' onChange={this.changeHandler} value={this.state.fat}/> <br/>
            <input className='carbs-input' name='carbs' type='text' placeholder='carbs' onChange={this.changeHandler} value={this.state.carbs}/> <br/>
            <button className='dish-submit-btn' type='submit'>Submit</button><br/>
            </form>
            </div>
            )
    }
}

export default DishForm