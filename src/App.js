import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User'
import UserBoard from './components/UserBoard'
import Clock from './components/Clock'

class App extends React.Component {
  render(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to this React exercise!</h1>
          <Clock hours={hours} minutes={minutes} seconds={seconds} />
        </header>
        <main>
          <UserBoard />
          <User name="Alice"/>
          <User name="Bob"/>
          <User name="Charles"/>
          <Title content="Some Funky Title"/>
          <LightSwitch />
        </main>
      </div>
    );
  }
}

export default App;

