import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User'
import UserBoard from './components/UserBoard'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to this React exercise!</h1>
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

