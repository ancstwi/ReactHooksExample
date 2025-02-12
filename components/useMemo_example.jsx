import React, { useState, useMemo } from "react";

const FactorialCalculator = () => {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => {
    const calculateFactorial = (n) =>
      n <= 0 ? 1 : n * calculateFactorial(n - 1);
    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <h2>
        Factorial of {number} is {factorial}
      </h2>
    </div>
  );
};

export default FactorialCalculator;
