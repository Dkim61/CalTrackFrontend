  
import React, { Component } from 'react';
import './App.css';
import HomePageContainer from './Containers/HomePageContainer/HomePageContainer';


class App extends Component {


  
  render() {
      return (
        <div className="App">
          <HomePageContainer />
          <br /><br />
        </div>
      );
  }
 
}



export default App;