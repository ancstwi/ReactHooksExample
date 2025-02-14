import React, { useLayoutEffect, useRef, useState } from "react";

const ListHeightTracker = () => {
  const [items] = useState(["Item 1", "Item 2", "Item 3"]);
  const [height, setHeight] = useState(0);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const { height } = listRef.current.getBoundingClientRect();
    setHeight(height);
  }, [items]);

  return (
    <div>
      <ul ref={listRef}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>List Height: {height}px</p>
    </div>
  );
};

export default ListHeightTracker;
