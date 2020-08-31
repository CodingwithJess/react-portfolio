import React, {Component} from "react";
import Main from "./components/Main";
import "./App.css";
import {Link} from "react-router-dom"

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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

export default App;
