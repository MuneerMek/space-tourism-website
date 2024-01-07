import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { getCLS, getFID, getLCP, getTTFB } from "web-vitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
getTTFB(console.log);
