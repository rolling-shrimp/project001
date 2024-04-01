import React from "react";
import { Container, Row } from "react-bootstrap";
import Main from "../components/Main";
import TheTitle from "../components/TheTitle";
import Curriculum from "../components/Curriculum";
import TheCatchLocation from "./theCatchLocation";

// import "./styles/styles.css";
function MusicHome({ setLocation }) {
  TheCatchLocation(setLocation);
  return (
    <Container fluid>
      <TheTitle>{"課程報名"}</TheTitle>
      <Row>
        <Main>
          <Curriculum />
        </Main>
      </Row>
    </Container>
  );
}
export default MusicHome;
