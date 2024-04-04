import React from "react";
import { Container } from "react-bootstrap";
import Courses from "../components/Courses";
import TheTitle from "../components/TheTitle";
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
