import React, { Component } from 'react';
import './App.css';
import HomePageContainer from './Containers/HomePageContainer/HomePageContainer';
import Select from 'react-select'
import axios from 'axios'

class App extends Component {
  state={
    selectOptions : []
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
 

 componentDidMount(){
  this.getOptions()
  }
  
  render() {
    console.log(this.state.selectOptions)
      return (
        <div className="App">
          <HomePageContainer dishOptions={this.state.selectOptions}/>
          <br /><br />
        </div>
      );
  }
 
}



export default App;