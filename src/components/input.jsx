import React from "react";
import './input.scss';
import magicBallService from "../services/magicService";
import { connect } from "react-redux";
import { addQuestion } from "../actions";
class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {question:'                                                                                                                                                                                                                                                                                                                                                                                                                                  '}
  }

  changeInput = (event) => {
    this.setState({question: event.target.value })
  }



  render() {
    return (
      <div>
        <input value={this.state.question} onChange={this.changeInput}/>
        <button onClick={() => {
          this.props.onSubmitQuestion(this.state.question)
        }} >Preguntar</button>
      </div>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  }
}

const mapDispatchToProps = (dispatch) => 
({
    onSubmitQuestion: (question) => {
      const answer = magicBallService(question);
      return dispatch(addQuestion(answer));
    } 
});

export default connect(null,mapDispatchToProps)(Input);