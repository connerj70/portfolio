import React, { Component } from 'react';
import './App.css';
import mainBackground from './assets/guillaume-jaillet-395162.jpg';
import logo from './assets/Combined Shape.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero-container">
          <img id="small-logo" src={logo} />
          <div className='laser'></div>
          <div className='laser1'></div>
          <div className='laser2'></div>
          <div className='laser3'></div>
          <div className='laser4'></div>
          <div className='laser5'></div>
          <div className="laser6"></div>
          <div className="laser7"></div>
          <div className="laser8"></div>
          <div className="laser9"></div>
          <div className="laser10"></div>
          <img src={mainBackground} />
          <h1>CONNER JENSEN</h1>
          <h2>Developer</h2>
        </div>
        <div className="sub-body">
        </div>
      </div>
    );
  }
}

export default App;
