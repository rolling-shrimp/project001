import React from "react";
import { Container, Row } from "react-bootstrap";
import Main from "../components/Main";
import Courses from "../components/Courses";
import TheTitle from "../components/TheTitle";
import Curriculum from "../components/Curriculum";
import TheCatchLocation from "./theCatchLocation";

// import "./styles/styles.css";
function MusicHome({ setLocation, currentuser }) {
  const { location } = TheCatchLocation(setLocation);
  return (
    <>
      <Container fluid>
        <TheTitle>{"課程報名"}</TheTitle>
      </Container>
      <Courses location={location} currentuser={currentuser} />
    </>
  );
}
export default MusicHome;
