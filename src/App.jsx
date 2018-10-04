import React, { Component } from "react";
import "./App.css";
import Input from "./components/input";
import magicBallService from "./services/magicService";
import Output from './components/output';
class App extends Component {
  state = {
    historyList: []
  };
  onNewQuestion = question => {
    const answer = magicBallService(question);
    this.setState({ historyList: [answer, ...this.state.historyList] });
  };
  render() {
    return (
      <div className="App">
        <Input submit={this.onNewQuestion} />
        <Output history={this.state.historyList}/>
      </div>
    );
  }
}

export default App;
