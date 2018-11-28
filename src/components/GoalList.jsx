import React, { Component } from "react";
import { connect } from "react-redux";
import { goalRef } from "../firebase";
import { setGoals } from "../actions";
import GoalItem from "./GoalItem";

class GoalList extends Component {
  componentDidMount() {
    goalRef.on("value", snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({ email, title, serverKey });
      });
        console.log("goals", goals);
      this.props.setGoals(goals);
    });
  }

  render() {
    console.log("this.state", this.props);
    return (
      <div>
        {this.props.goals.map((goal, index) => {
          return <GoalItem key={index} goals={goal} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  };
}
export default connect(
  mapStateToProps,
  { setGoals }
)(GoalList);
