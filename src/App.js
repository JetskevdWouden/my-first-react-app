import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //we define a methos render
  render(){
    return (
      //we say what it should return
      //REACT calls the App.rednder() for us

      //render() returns JSX
      //JSX is a js way of writing HTML
      //JSX <h1>Hallo</h1>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Codaisseur!
          </p>
          <Greeting />        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hallo</h1>
    )
  }
}

//call greeting component <Gretting /> ^


export default App;

