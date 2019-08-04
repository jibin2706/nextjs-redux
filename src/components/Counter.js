import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions/counterActions";

function Counter({ counter, increment, decrement, reset }) {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
