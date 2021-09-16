import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WorkflowProvider } from "./context/WorkflowContext";
import { ModalOverlayProvider } from "./context/ModalOverlayContext";

ReactDOM.render(
  <WorkflowProvider>
    <ModalOverlayProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ModalOverlayProvider>
  </WorkflowProvider>,
  document.getElementById("root")
);
