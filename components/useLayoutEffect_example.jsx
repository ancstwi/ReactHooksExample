import React, { useLayoutEffect, useRef, useState } from "react";

const SizeTracker = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const { width, height } = boxRef.current.getBoundingClientRect();
    setSize({ width, height });
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "200px", height: "100px", background: "lightblue" }}
      >
        Resize me!
      </div>
      <p>
        Width: {size.width}px, Height: {size.height}px
      </p>
    </div>
  );
};

export default SizeTracker;
