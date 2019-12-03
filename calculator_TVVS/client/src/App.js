import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Calculator from './Calculator';
// resources
import './css/calculator.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1 className="calc-header">Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
