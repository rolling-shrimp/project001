import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles/hompage/hompage.css";
const Main = ({ children }) => {
  return (
    <main
      id="main"
      className="w-100 musicGenre d-flex flex-column align-items-center justify-content-center"
    >
      {children}
    </main>
  );
};

export default Main;
