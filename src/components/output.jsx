import React from "react";
import "./output.scss";
import { connect } from "react-redux";
class Output extends React.Component {
  
  render() {
    return (
      <div className="Output">
        {this.props.history.map((record, i) => (
          <div
            className={(i === 0 ? "last" : "" )+ ` record ${record.answer.type}`}
            key={i}
          >
            <div className="question"> ¿{record.question}? </div>
            <div className="answer">{record.answer.text}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state)  => {
  return {
    history: state.history
  }
}

export default connect(
  mapStateToProps,
  null
)(Output);
