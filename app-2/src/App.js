import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      foods: ['mango', 'potatoes', 'peaches', 'octopus', 'pears']
    };

  }

  render(){

    let foodsToDisplay = this.state.foods.map((element,index) => {
      return <h2 key = {index}>{element}</h2>;
    });

    return(
      <div className = 'App'>
        {foodsToDisplay} 
      </div>
    )
  }
}

export default App;