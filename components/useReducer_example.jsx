import React, { useReducer } from "react";

const initialState = { name: "", email: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const FormComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={handleEmailChange}
      />
      <h2>Name: {state.name}</h2>
      <h2>Email: {state.email}</h2>
    </div>
  );
};

export default FormComponent;
