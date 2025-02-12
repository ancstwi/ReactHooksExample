import React, { useState, useTransition } from "react";

const ItemList = ({ inputValue }) => {
  const items = Array.from(
    { length: 1000 },
    (_, i) => `${inputValue} ${i + 1}`
  );
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const TransitionExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    startTransition(() => {
      // Здесь можно обновить состояние или что-то еще
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type to generate items..."
      />
      {isPending && <p>Loading...</p>}
      <ItemList inputValue={inputValue} />
    </div>
  );
};

export default TransitionExample;
