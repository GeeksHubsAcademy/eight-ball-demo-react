import React from "react";
import "./output.scss";
import { connect } from "react-redux";
class Output extends React.Component {
  
  render() {
    return (
      <div>
             {this.props.history.map((history) => 
              [
              <div className="question"> ¿{history.question}? </div>,
              <div className="answer">{history.answer.text}</div>
              ]
             )}
            
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
