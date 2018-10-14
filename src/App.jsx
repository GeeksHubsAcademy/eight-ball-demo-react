import React, { Component } from "react";
import "./App.css";
import Input from "./components/input";
import Output from './components/output';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Input/>
        <Output/>
      </div>
    );
  }
}

export default App;
