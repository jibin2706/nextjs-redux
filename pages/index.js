import React from "react";
import Counter from "../src/components/Counter";

function index() {
  return (
    <div>
      <Counter />
    </div>
  );
}

index.getInitialProps = () => {
  return {};
};

export default index;
