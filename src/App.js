import React, { Component } from 'react';
import './App.scss';
import ElanHeader from './components/Header/Header';


// design see @ https://dribbble.com/shots/3860051-Personal-Portfolio-Site

class App extends Component {
  render() {
    return (
      <div className="App">
        <ElanHeader />

        <div className="middle">
          Hello
        </div>
      </div>
    );
  }
}

export default App;
