import React from "react";
import { Row, Col } from "react-bootstrap";
import "../components/styles/hompage/hompage.css";
const FormArea = ({ children }) => {
  return (
    <Row className="musicGenre">
      <Col md={3}></Col>
      <Col md={6}>{children}</Col>
      <Col md={3}></Col>
    </Row>
  );
};

export default FormArea;
