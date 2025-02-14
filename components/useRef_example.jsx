import React, { useRef } from "react";

const ResetInput = () => {
  const inputRef = useRef(null);

  const handleReset = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ResetInput;
