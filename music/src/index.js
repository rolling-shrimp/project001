import React from "react";
import ReactDOM from "react-dom";
// import "./components/styles/styles.css";
import "react-bootstrap";
import "bootstrap";
import "reactstrap";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
