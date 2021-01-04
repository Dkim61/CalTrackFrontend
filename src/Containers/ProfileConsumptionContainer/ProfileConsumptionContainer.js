import React, { Component } from 'react';
import './ProfileConsumptionContainer.css'
import axios from 'axios'
import Select from 'react-select'

import ConsumptionCard from '../../Components/ConsumptionCard/ConsumptionCard'




class ProfileConsumptionContainer extends Component {
    state={
        selectOptions : [],
        date: "",
        totalCals:0
    }

    addCalories = () => {
        fetch('http://localhost:3001/consumptions/')
        .then(response => response.json())
        .then((data) => {
            let filteredData= data.filter(c => c.consumption.date === this.state.date)
            let filteredDataTotals = filteredData.map(c => (c.consumption.servings * c.consumption.dish.calories))
            let total = filteredDataTotals.reduce((a, b) => a + b, 0)
            console.log(total)
            // return total.toString()
            this.setState({
                totalCals: total
            })
            
    })
    return this.state.totalCals
    }

    async getOptions(){
        let resConsumption = await axios.get('http://localhost:3001/consumptions/')
        let data = resConsumption.data
        console.log(data)
        let dataDates = data.map(c => c.consumption.date)
        let dataDatesUniq = []
        dataDates.map(date => {
            if (dataDatesUniq.indexOf(date) === -1) {
                dataDatesUniq.push(date)
            }
        })
        console.log(dataDatesUniq)
    
        const options = dataDatesUniq.map(d => ({ 
          "value" : d,
          "label" : d
        }))
        this.setState({selectOptions: options})
      }
     


handleChange(e){
    this.setState({date: e.value})
}


renderCards = () => {
    let matchingConsumptions = this.props.consumptionApi.filter(c => (c.consumption.date === this.state.date))
    console.log("THIS", matchingConsumptions)
    return matchingConsumptions.map(consumption => <ConsumptionCard consumptionObj={consumption} id={consumption.id} consumptionUpdate={this.props.consumptionUpdate} handleDelete={this.props.handleDelete} dishesOptions={this.props.dishesOptions} dishName={consumption.dish}/>)
}

componentDidMount(){
    this.getOptions()
}

    render()
    { console.log(this.props.dishesOptions)
        return(
            <div className="collection-select">
            <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}/>
            <p>Selected Date: <strong>{this.state.date? this.state.date : "None"}</strong></p>
            <div>
                {this.renderCards()}
            </div>
            <div>
                {/* <h4>Total Calories of the day: {this.addCalories()} </h4> */}
            </div>
            </div>
       
        )
    }
}

export default ProfileConsumptionContainer;