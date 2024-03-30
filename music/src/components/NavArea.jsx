import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import DropDown from "./DropDown";
import Navs from "./Navs";
const NavArea = ({ currentuser }) => {
  const location = useLocation();
  const [navArea, setnavArea] = useState({ color: "white" });
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = useCallback(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };
    updateScrollPosition();
  }, []);

  const changeNavStyle = useCallback(() => {
    if (location.pathname !== "/") {
      setnavArea({
        ...navArea,
        backgroundColor: "white",
        color: "black",
        borderBottom: "black 1px solid",
      });
    } else {
      scrollPosition > 0
        ? setnavArea({
            ...navArea,
            backgroundColor: "white",
            color: "black",
            borderBottom: "black 1px solid",
          })
        : setnavArea({ color: "white" });
    }
  }, [scrollPosition, location]);

  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  useEffect(() => {
    changeNavStyle();
  }, [changeNavStyle]);
  return (
    <Container className="stickyPosition" style={navArea} fluid>
      <Row>
        <Col sm="auto" md={1}></Col>
        <Col xs={8} sm={2} md="4">
          <div
            style={{ color: navArea.color }}
            className="note theNav d-flex flex-column align-items-start justify-content-center "
          >
            <i class="fa-solid fa-circle-play"></i>
          </div>
        </Col>
        <Col className="smallWidthColumn " xs={2} sm={8} md="7">
          <Navs navArea={navArea} currentuser={currentuser} type="outOfDrop" />
          <DropDown navArea={navArea} currentuser={currentuser} />
        </Col>
      </Row>
    </Container>
  );
};

export default NavArea;
