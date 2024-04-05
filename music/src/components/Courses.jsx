import React from "react";
import GetCourseData from "./getCourseData";
import "../components/styles/Curriculum/Curriculum.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import "animate.css";
import Swal from "sweetalert2";
import profileServicing from "../service/profile_Service";
import { filterCourses } from "./checkIfEnrolled";
const Courses = ({ location, currentuser }) => {
  let courses;
  courses = GetCourseData(location, currentuser).courses;

  const enrollCourse = (_id) => {
    if (!currentuser.token || currentuser.user.role !== "student") {
      Swal.fire({
        title: !currentuser.token ? "請先登入" : "只有學生才能報名",
        confirmButtonText: "確定",
        confirmButtonColor: "black",
      });
      return;
    }

    Swal.fire({
      title: "確定要報名嗎?",
      confirmButtonText: "確定",
      confirmButtonColor: "black",
      cancelButtonText: "取消",
      cancelButtonColor: "gray",
    })
      .then((result) => {
        profileServicing.enrollCourse(_id).then((response) => {
          Swal.fire({
            title: "報名成功",
            confirmButtonColor: "black",
            icon: "success",
          });
          window.location = "/mcourse";
        });
      })
      .catch((e) => {
        console.log(e);
        Swal.fire({
          title: "報名失敗發生錯誤",
          confirmButtonColor: "black",
          icon: "error",
        });
      });
  };
  return (
    <Container
      fluid
      style={{
        backgroundColor:
          location === "/personalPage" && currentuser.user.role === "instructor"
            ? "gray"
            : "rgb(228, 226, 226)",
      }}
    >
      <Row style={{}} className="topDownRow">
        <Col md="3"></Col>
        <Col md="6">
          {location === "/personalPage" && (
            <div
              style={{
                color:
                  currentuser.user.role === "instructor" ? "white" : "black",
              }}
              className="h-100 d-flex flex-column align-items-center justify-content-center"
            >
              <h1>
                {currentuser.user.role === "student"
                  ? "你報名的課"
                  : "你開的課"}
                :
              </h1>
            </div>
          )}
        </Col>
        <Col md="3"></Col>
      </Row>
      <Row md={12} className="px-5 ">
        {courses.map((item) => (
          <Col key={item.title} className="p-2" md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <p>價錢: {item.price}</p>
                <p>地點: {item.place}</p>
                <p>日期: {item.date.split("T")[0]}</p>
                {location !== "/personalPage" && (
                  <button
                    onClick={() => {
                      enrollCourse(item._id);
                    }}
                    disabled={filterCourses(item.students, currentuser.user.id)}
                  >
                    {filterCourses(item.students, currentuser.user.id)
                      ? "已報名"
                      : "報名"}
                  </button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="topDownRow"></Row>
    </Container>
  );
};

export default Courses;
