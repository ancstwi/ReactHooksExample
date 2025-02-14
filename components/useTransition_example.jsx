import React, { useState, useTransition } from "react";

const SmoothListUpdate = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    startTransition(() => {
      const newItems = Array.from(
        { length: 1000 },
        (_, i) => `${value} ${i + 1}`
      );
      setItems(newItems);
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
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmoothListUpdate;
