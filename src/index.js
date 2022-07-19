import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/vendors/bootstrap/bootstrap.css";
import "./assets/css/woocomerce.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import App from "./App";
import { CoursesProvider } from "./context/courses_context";
import { OptionsProvider } from "./context/options_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <OptionsProvider>
    <CoursesProvider>
      <App />
    </CoursesProvider>
  </OptionsProvider>
  // </React.StrictMode>
);
