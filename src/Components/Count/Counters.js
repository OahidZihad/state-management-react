import React from "react";
import { useState } from "react";
import Counter from "./Counter";

const counters = [
  { id: 1, value: 4 },
  { id: 2, value: 5 },
  { id: 3, value: 5 },
  { id: 4, value: 2 },
];

const Counters = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCount(counters);
  };
  return (
    <div>
      <h1>This is countersssss</h1>
      <button onClick={handleReset}>Reset</button>
      {counters.map((counter) => (
        <Counter counter={counter}></Counter>
      ))}
    </div>
  );
};

export default Counters;
