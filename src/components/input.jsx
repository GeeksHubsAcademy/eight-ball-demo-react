import React from "react";
import './input.scss';
export default class Input extends React.Component {
  state = {
    question: ""
  };
  submit = ev => {
    ev.preventDefault();
    if (this.state.question && typeof this.props.submit === "function") {
        this.props.submit(this.state.question);
        this.setState({ question: '' })
    }
  };
  render() {
    return (
      <form onSubmit={this.submit} className="Input">
        <input
          type="text"
          placeholder="¿Qué quieres saber?"
          value={this.state.question}
          onChange={event => this.setState({ question: event.target.value })}
        />
        <button type="submit">Dime!</button>
      </form>
    );
  }
}
