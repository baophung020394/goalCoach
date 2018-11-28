import React, { Component } from "react";
import { connect } from "react-redux";
import { setCompleted } from "../actions";
import { completeGoalRef } from "../firebase";

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on("value", snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { title, email } = completeGoal.val();
        completeGoals.push({ title, email });
      });
      this.props.setCompleted(completeGoals);
    });
  }
  clearCompleted() {
      completeGoalRef.set([]);
  }
  render() {
    return (
      <div>
        {this.props.completeGoals.map((completeGoal, index) => {
          const { title, email } = completeGoal;
          return (
            <div key={index}>
              <strong>{title}</strong> Completed by <em>{email}</em>
            </div>
          );
        })}
        <button onClick={() => this.clearCompleted()} className="btn btn-warning" style={{marginTop:'5px', marginBottom: '10px'}}>Clear All</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  };
}
export default connect(
  mapStateToProps,
  { setCompleted }
)(CompleteGoalList);
