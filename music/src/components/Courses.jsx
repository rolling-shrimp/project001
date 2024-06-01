import React, { useContext } from "react";
import "../components/styles/Curriculum/Curriculum.css";
import { Row, Col, Card, Container, Spinner } from "react-bootstrap";
import "animate.css";
import Swal from "sweetalert2";
import profileServicing from "../service/profile_Service";
import { filterCourses } from "./checkIfEnrolled";
import { objectFromAppjs } from "../App";
import { cancelEnroll } from "./crudFunction";
const Courses = ({ location, currentuser }) => {
  const { data } = useContext(objectFromAppjs);

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

          window.location = "/personalPage";
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
                {currentuser.user.role === "student" ? "已開課程" : "你開的課"}:
              </h1>
            </div>
          )}
        </Col>
        <Col md="3"></Col>
      </Row>
      {data.length !== 0 ? (
        <Row md={12} className="px-5 ">
          {data.map((item) => (
            <Col key={item.title} className="p-2" md={4}>
              <Card>
                <Card.Body style={{ height: "50vh" }}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text style={{ height: "10vh" }}>
                    {item.description}
                  </Card.Text>
                  <p>價錢: {item.price}</p>
                  <p>地點: {item.place}</p>
                  <p>日期: {item.date.split("T")[0]}</p>
                  {location === "/personalPage" && (
                    <>
                      {filterCourses(item.students, currentuser.user.id) ? (
                        <>
                          <button disabled className="mr-3">
                            已報名
                          </button>
                          <button
                            onClick={() => {
                              cancelEnroll(item._id);
                            }}
                            className="m-1"
                          >
                            取消報名
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            enrollCourse(item._id);
                          }}
                        >
                          報名
                        </button>
                      )}
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col md={4}></Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-center h-50"
            md={4}
          >
            <h3>
              {" "}
              後端api是架設在免費的server上，會有server休眠時間，大概一分鐘，請耐心等候
            </h3>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
          <Col md={4}></Col>
        </Row>
      )}

      <Row className="topDownRow"></Row>
    </Container>
  );
};

export default Courses;
