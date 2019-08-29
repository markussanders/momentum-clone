import React from 'react';
import './App.css';
import Clock from './components/Clock';
import FocusForm from './components/FocusForm';
import Focus from './components/Focus';
import valley from './photos/valley.jpg';

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
        <div id="sub-container">
          <img className="background-image" src={valley}/>
        </div>
        <div id="top-container">
            <Clock currentUser={this.state.currentUser}/>
            {this.state.mainFocus ? <Focus mainFocus={this.state.mainFocus} setMainFocus={this.setMainFocus} /> : <FocusForm setMainFocus={this.setMainFocus} />}
        </div>
      </div>
    )
  }
  
}

export default App;
