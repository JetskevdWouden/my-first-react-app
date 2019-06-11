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
            Learn React<br></br>
    {/* You can insert values or expressions iusiong curly bracets */}
    {/* What values are allowed? */}
    {/* string, numbers, array of strings or react components */}
    {/* not allowed: objectsallowed but doesnt do anything */}
    {/* booleans, undefined, null */}
            {null}
            {/* {undefined} - returning undefined is not allowed */}
            {['hello', 'okidoki', 'jalajala']}
            {[<Greeting />, <Greeting />, <Greeting />]}
            {/* { {} } - throw an error - can render prop valuews of objects is they are typeof allowed data type */}
            {'Just a test'}
            {5+5}
            {true}
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
//you cna insert values using {} --> { 'I am a string'}


export default App;

