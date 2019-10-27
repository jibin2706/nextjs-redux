import React from "react";
import Counter from "../src/components/Counter";
import { increment } from "../src/actions/counterActions";

function index() {
  return (
    <div>
      <Counter />
    </div>
  );
}

index.getInitialProps = ({ reduxStore }) => {
  reduxStore.dispatch(increment()); // action will dispatched on page load

  const state = reduxStore.getState(); // returns redux store
  console.log(state);

  return {};
};

export default index;
