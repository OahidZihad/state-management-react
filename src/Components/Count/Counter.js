import React from "react";

const Counter = (props) => {
  const { counter } = props;
  console.log("props", counter);

  return (
    <div>
      <h4>{counter.value}</h4>
    </div>
  );
};

export default Counter;
