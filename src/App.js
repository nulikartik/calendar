import React, { Component } from 'react';
import './App.css';
import './Components/DateBlock.js';
import CalendarGroup from './Components/CalendarGroup.js';
import Form from './Components/Form.js';

class App extends Component {
  render() {
    const style = {
      width:  30  + 'px',
      height: 30 + 'px',
      color:"blue",
      backgroundColor: "black"
  };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title container">Custom Calendar</h1>
        </header>
        <Form />
      </div>  
        
    );
  }
}

export default App;
