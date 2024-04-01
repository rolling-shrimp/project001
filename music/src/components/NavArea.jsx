import React, { useState, useCallback, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import DropDown from "./DropDown";
import Navs from "./Navs";

const NavArea = ({ setcurrentuser, currentuser, location }) => {
  // const location = useLocation();
  const [width, setWidth] = useState(null);
  const [scroll, setScroll] = useState(0);
  const [navArea, setnavArea] = useState({});

  //update the width of the device
  const resizeWidth = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.addEventListener("resize", resizeWidth);
    };
  }, [resizeWidth]);

  useEffect(() => {
    if (width <= 576) {
      setnavArea({ color: "black" });
    } else {
      setnavArea({ color: "white" });
    }
  }, [width]);

  const updateScroll = useCallback(() => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [updateScroll]);

  useEffect(() => {
    if (location === "/") {
      scroll > 0
        ? setnavArea({
            color: "black",
            backgroundColor: "white",
            borderBottom: "black solid 1px",
          })
        : setnavArea({ color: "white" });
      // if (window.innerWidth > 576) {
      // }
    }
  }, [scroll, location]);
  useEffect(() => {
    location !== "/"
      ? setnavArea({
          color: "black",
          backgroundColor: "white",
          borderBottom: "black solid 1px",
        })
      : setnavArea({ color: "white" });
  }, [location]);

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
          <Navs
            setcurrentuser={setcurrentuser}
            navArea={navArea}
            currentuser={currentuser}
            type="outOfDrop"
          />
          <DropDown navArea={navArea} currentuser={currentuser} />
        </Col>
      </Row>
    </Container>
  );
};

export default NavArea;
