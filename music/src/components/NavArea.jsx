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
    console.log("activate useCallbak");
    let updatedNavArea = { backgroundColor: "", color: "", borderBottom: "" };
    if (location.pathname !== "/") {
      updatedNavArea.backgroundColor = "white";
      updatedNavArea.color = "black";
      updatedNavArea.borderBottom = "black 1px solid";
    } else {
      if (scrollPosition > 0) {
        updatedNavArea.backgroundColor = "white";
        updatedNavArea.color = "black";
        updatedNavArea.borderBottom = "black 1px solid";
      } else {
        updatedNavArea = { ...updatedNavArea, color: "white" };
      }
    }
    return updatedNavArea; // 不再更新狀態，僅返回更新後的值
  }, [scrollPosition, location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [scroll]);
  useEffect(() => {
    const updatedNavArea = changeNavStyle();
    setnavArea(updatedNavArea);
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
