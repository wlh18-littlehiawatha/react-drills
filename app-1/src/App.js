import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      input: ''
    };
  }

    handleChange(value) {
      this.setState({message: value});
    }


  render(){
      return (
        <div>
          <input onChange = {e => this.handleChange(e.target.value)} type = "text" />
          <p> {this.state.message} </p>
        </div>
      
    );
  }
}

export default App;
