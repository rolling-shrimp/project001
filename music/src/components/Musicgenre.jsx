import React from "react";
import { Col, Figure, Nav, Row } from "react-bootstrap";

import { musicType } from "./musicTypeList";
const Musicgenre = () => {
  return (
    <Row style={{ backgroundColor: "white" }}>
      <Col>
        <main
          id="main"
          className="MusicGenre d-flex flex-column justify-content-center"
        >
          <div className="w-70 d-flex flex-column justify-content-start align-items-center px-5">
            <h1 className="mb-5">曲風類別</h1>

            <div className="w-100 d-flex flex-row align-items-center justify-content-evenly">
              {musicType.map((item) => (
                <Figure className="figureElement">
                  <Nav.Link
                    href={`/${item.type}`}
                    rel="noreferrer"
                    target="blank"
                    style={{ display: "block" }}
                  >
                    <Figure.Image
                      width={150}
                      height={150}
                      src={item.imgSrc}
                      alt=""
                    />
                  </Nav.Link>
                  <Figure.Caption className="linkColor">
                    {item.type}
                  </Figure.Caption>
                </Figure>
              ))}
            </div>
          </div>
        </main>
      </Col>
    </Row>
  );
};

export default Musicgenre;
