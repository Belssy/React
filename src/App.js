import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hello />
         
          <p>
            Ed
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
