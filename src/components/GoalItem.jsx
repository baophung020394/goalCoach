import React, { Component } from "react";
import { connect } from "react-redux";
import { completeGoalRef, goalRef } from "../firebase";

class GoalItem extends Component {
  completeGoal() {
    const { title, serverKey } = this.props.goals;
    const { email } = this.props.user;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({title, email});
  }
  render() {
    const { email, title } = this.props.goals;
    return (
      <div style={{ margin: "5px" }}>
        <strong style={{ marginRight: "10px" }}>{title}.</strong>
        <span style={{ marginRight: "10px" }}>
          submitted by <em>{email}</em>
        </span>
        <button
          onClick={() => this.completeGoal()}
          type="button"
          className="btn btn-sm btn-primary"
        >
          Complete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}
export default connect(
  mapStateToProps,
  null
)(GoalItem);
