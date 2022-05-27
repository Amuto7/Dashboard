import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
// ReactDOM.render(<App/>,document.getElementById('root'))