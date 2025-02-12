import React, { useState, useDebugValue } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  useDebugValue(count > 0 ? "Positive" : "Non-positive");

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
};

const CounterComponent = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
