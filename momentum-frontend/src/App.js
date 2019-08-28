import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {name: 'Markus'},
    }
  }
  render() {
    return ( 
      <div>
        <Clock currentUser={this.state.currentUser}/>
      </div>
    )
  }
  
}

export default App;
