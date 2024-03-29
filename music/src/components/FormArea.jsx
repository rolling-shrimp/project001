import React from "react";
import { Row, Col } from "react-bootstrap";
import "../components/styles/hompage/hompage.css";
const FormArea = ({ children }) => {
  return (
    <Row className="musicGenre">
      <Col md={4}></Col>
      <Col md={4}>{children}</Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default FormArea;
