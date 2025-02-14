import React, { useState } from "react";
import "./styles.css";

import TextInput from "./components/useState_example";
import WindowSizeTracker from "./components/useEffect_example";
import FactorialCalculator from "./components/useMemo_example";
import ResetInput from "./components/useRef_example";
import ThemedComponent from "./components/useContext_example";
import ItemList from "./components/useCallback_example";
import ListHeightTracker from "./components/useLayoutEffect_example";
import Counter from "./components/useDebugValue_example";
import FormComponent from "./components/useReducer_example";
import SmoothListUpdate from "./components/useTransition_example";

const components = [
  { name: "Text Input", component: <TextInput /> },
  { name: "Window Size Tracker", component: <WindowSizeTracker /> },
  { name: "Factorial Calculator", component: <FactorialCalculator /> },
  { name: "Reset Input", component: <ResetInput /> },
  { name: "Themed Component", component: <ThemedComponent /> },
  { name: "Item List", component: <ItemList /> },
  { name: "List Height Tracker", component: <ListHeightTracker /> },
  { name: "Counter", component: <Counter /> },
  { name: "Form Component", component: <FormComponent /> },
  { name: "Smooth List Update", component: <SmoothListUpdate /> },
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
