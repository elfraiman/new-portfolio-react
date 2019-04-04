import React, { Component } from 'react';
import './App.scss';
import ElanHeader from './components/Header/Header';


// design see @ https://dribbble.com/shots/3860051-Personal-Portfolio-Site

class App extends Component {

ColoredLine = ( color ) => (
    <hr style={{
      marginTop: 10,
      marginLeft: 10,
      color: color,
      backgroundColor: color,
      height: 2,
      border: 'none'
    }}  />
  );

  render() {
    return (
      <div className="App">
        <ElanHeader />

        <div className="wrapper">
          <p className="hello-text">Hello</p>
          <div className="white-line">
            {this.ColoredLine('#aa00ff')}
          </div>
          <p className="this-is-me">This is me</p>
        </div>
      </div>
    );
  }
}

export default App;
