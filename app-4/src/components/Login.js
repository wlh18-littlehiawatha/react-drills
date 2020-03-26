import React, {Component} from 'react';

class Login extends Component {
   constructor(props){
      super(props);

      this.state = {
         username: '',
         password: ''
      };

      this.handleLogin = this.handleLogin.bind(this);
   }

   handleUsernameChange(value){
      this.setState({username: value});
   }

   handlePasswordChange(value){
      this.setState({password: value})
   }

   handleLogin(){
      alert(`Username: ${this.state.username} Password: ${this.state.password}`);
   }

   render(){

      return(
         <div>
            {/* Login Componet */}
           
            <input placeholder = 'Username' onChange = {e => this.handleUsernameChange(e.target.value)} type = "text" />
            
            <input placeholder = 'Password' onChange = { e => this.handlePasswordChange(e.target.value)} type = "password" />

            <button onClick = {this.handleLogin} >Login</button>
         </div>
      )
   }
}

export default Login;