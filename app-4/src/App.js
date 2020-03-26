import React, {Component} from 'react';
import Login from './components/Login'

class App extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = {
      

  //   };
  // }


  render(){


    return(
      <div className = 'App'>
        {/* App Component */}
        <Login/>
      </div>
    );
  }
}

export default App;