import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/vendors/bootstrap/bootstrap.css";
import "./assets/css/woocomerce.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
