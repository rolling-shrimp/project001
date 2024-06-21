import React, { useState } from "react";
import Main from "./Main";
import TheTitle from "./TheTitle";
import { Container, Col, Row, Button } from "react-bootstrap";

const Aboutme = () => {
  const [num, setNum] = useState(1);
  const { num1, num2, num3, num4 } = num;
  const add = () => {
    setNum((prev) => prev + 1);
    setNum(num + 2);
    setNum((prev) => prev + 3);
    // setNum((prev) => {
    //   return {
    //     ...prev,
    //     num1: num1 + 1,
    //     num2: num2 + 1,
    //     num3: num3 + 1,
    //     num4: num4 + 1,
    //   };
    // });
  };

  return (
    <>
      <TheTitle>關於我</TheTitle>
      <Main>
        <Container fluid>
          <Row>
            <Col
              style={{ border: "2px solid black", height: "50vh" }}
              className="d-flex flex-row align-items-center justify-content-center"
              md={6}
            >
              {" "}
              <h1>{num}</h1>
            </Col>
            <Col
              style={{ border: "2px solid black", height: "50vh" }}
              className="d-flex flex-row align-items-center justify-content-center"
              md={6}
            >
              {" "}
              <h1>{num}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={4}></Col>
            <Col
              md={4}
              className="d-flex flex-row align-items-center justify-content-center"
            >
              <Button variant="secondary" onClick={add}>
                增加
              </Button>
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row>
            <Col
              style={{ border: "2px solid black", height: "50vh" }}
              className="d-flex flex-row align-items-center justify-content-center"
              md={6}
            >
              {" "}
              <h1>{num}</h1>
            </Col>
            <Col
              style={{ border: "2px solid black", height: "50vh" }}
              className="d-flex flex-row align-items-center justify-content-center"
              md={6}
            >
              {" "}
              <h1>{num}</h1>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default Aboutme;
