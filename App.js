import React, { useState } from "react";
import "./styles.css";

import Counter from "./components/useDebugValue_example";
import TextInput from "./components/useState_example";
import DataFetcher from "./components/useEffect_example";
import FactorialCalculator from "./components/useMemo_example";
import FocusInput from "./components/useRef_example";
import ThemedComponent from "./components/useContext_example";
import ItemList from "./components/useCallback_example";
import SizeTracker from "./components/useLayoutEffect_example";
import FormComponent from "./components/useReducer_example";
import TransitionExample from "./components/useTransition_example";

const components = [
  { name: "Counter", component: <Counter /> },
  { name: "Text Input", component: <TextInput /> },
  { name: "Data Fetcher", component: <DataFetcher /> },
  { name: "Factorial Calculator", component: <FactorialCalculator /> },
  { name: "Focus Input", component: <FocusInput /> },
  { name: "Themed Component", component: <ThemedComponent /> },
  { name: "Item List", component: <ItemList /> },
  { name: "Size Tracker", component: <SizeTracker /> },
  { name: "Form Component", component: <FormComponent /> },
  { name: "Transition Example", component: <TransitionExample /> },
];

const App = () => {
  const [activeComponent, setActiveComponent] = useState(
    components[0].component
  );

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h1>React Hooks Examples</h1>
      <div style={{ marginBottom: "20px" }}>
        {components.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveComponent(item.component)}
            style={{
              margin: "5px",
              padding: "10px 20px",
              backgroundColor:
                activeComponent === item.component ? "green" : "lightgray",
              color: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        {activeComponent}
      </div>
    </div>
  );
};

export default App;
