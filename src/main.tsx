import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { registerSW } from "virtual:pwa-register";
import "./index.css";

registerSW();

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
