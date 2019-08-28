import React from 'react';
import './App.css';
import Clock from './components/Clock';
import FocusForm from './components/FocusForm';
import Focus from './components/Focus';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {name: 'Markus'},
      mainFocus: '',
    }
  }

  setMainFocus = mainFocus => {
    console.log('GOT HERE', 'mainFocus = ', mainFocus)
    this.setState({ mainFocus })
  }
  render() {
    return ( 
      <div>
        <Clock currentUser={this.state.currentUser}/>
        {this.state.mainFocus ? <Focus mainFocus={this.state.mainFocus} /> : <FocusForm setMainFocus={this.setMainFocus} />}
      </div>
    )
  }
  
}

export default App;
