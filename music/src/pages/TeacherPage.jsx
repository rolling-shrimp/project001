import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import TheTitle from "../components/TheTitle";
import FormArea from "../components/FormArea";
import FormToFill from "../components/FormToFill";
import { objectFromAppjs } from "../App";
import { Link } from "react-router-dom";
import TheCatchLocation from "./theCatchLocation";
import Courses from "../components/Courses";
import "../components/styles/hompage/hompage.css";
const TeacherPage = ({ setLocation }) => {
  const { location } = TheCatchLocation(setLocation);
  const { currentuser } = useContext(objectFromAppjs);
  return (
    <>
      <Container fluid>
        {currentuser.user ? (
          <TheTitle>
            {currentuser.user.role === "instructor" ? "老師頁面" : "學員頁面"}
          </TheTitle>
        ) : (
          <TheTitle>你尚未登入</TheTitle>
        )}

        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            {currentuser.user ? (
              <div className="d-flex flex-column align-items-center justify-content-center p-3">
                {" "}
                <h6 style={{ color: "white" }}>{currentuser.message}</h6>
              </div>
            ) : (
              <div className="d-flex flex-column align-items-center justify-content-center p-3">
                <Link style={{ color: "white" }} to={"/login"}>
                  {" "}
                  前往登入頁面
                </Link>
              </div>
            )}
          </Col>
          <Col md={4}></Col>
        </Row>
        {currentuser.user && currentuser.user.role === "instructor" ? (
          <FormArea>
            <FormToFill />
          </FormArea>
        ) : (
          <Row></Row>
        )}
      </Container>
      <Courses location={location} currentuser={currentuser} />
    </>
  );
};

export default TeacherPage;
