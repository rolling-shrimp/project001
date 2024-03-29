import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";

import profileServicing from "../service/profile_Service";
function MusicHome(props) {
  let { currentuser /*ignored*/ } = props;
  console.log(currentuser);

  const [thedatas, setDatas] = useState([]);
  const [courseData, setcourseData] = useState([]);

  const BeatFunc = useCallback((idparam) => {
    const getBeat = async () => {
      try {
        let theRes = await profileServicing.get(idparam);
        setDatas(theRes.data);
      } catch (e) {
        console.log(e);
      }
    };
    getBeat(idparam);
  }, []);
  const CourseFunc = useCallback((idparam) => {
    const getCourse = async () => {
      try {
        let theRes = await profileServicing.getcourse(idparam);
        console.log(theRes.data);
        setcourseData(theRes.data);
      } catch (e) {
        console.log(e);
      }
    };
    getCourse(idparam);
  }, []);

  useEffect(() => {
    let theid;

    if (currentuser) {
      theid = currentuser.user.id;
      console.log(theid);
      BeatFunc(theid);
    } else {
      theid = "";
    }
  }, [BeatFunc, currentuser]);
  useEffect(() => {
    let theid;

    if (currentuser) {
      theid = currentuser.user.id;
      console.log(theid);
      CourseFunc(theid);
    } else {
      theid = "";
    }
  }, [CourseFunc, currentuser]);

  return (
    <>
      {!currentuser && (
        <>
          <a href="/log">請先登入</a>
        </>
      )}
      {currentuser && (
        <>
          <main className="memee">
            <section className="kobe3">
              <div
                style={{
                  color: "white",
                  padding: " 1rem",
                  border: "2px solid white",
                }}
              >
                <h5>姓名: {currentuser.user.name}</h5>
                <h5>帳號: {currentuser.user.account}</h5>
                <h5>電話: {currentuser.user.phone}</h5>
                <h5>email: {currentuser.user.email}</h5>
              </div>
            </section>
            <section className="kobe2">
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  color: "white",
                  padding: " 1rem",
                  border: "2px solid white",
                  minHeight: " 100px",
                  width: "50%",
                }}
              >
                <h2>你下單的音樂</h2>
                <Container
                  fluid
                  style={{
                    color: "white",
                    padding: " 1rem",
                    border: "2px solid white",
                    minHeight: " 50px",
                    width: "50%",
                  }}
                >
                  {thedatas.map((item) => {
                    return (
                      <Col>
                        <Row>{item.product_name}</Row>
                      </Col>
                    );
                  })}
                </Container>
              </div>
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  color: "white",
                  padding: " 1rem",
                  border: "2px solid white",
                  minHeight: " 50px",
                  width: "50%",
                }}
              >
                <h2>你買的課程</h2>
                <Container
                  fluid
                  style={{
                    color: "white",
                    padding: " 1rem",
                    border: "2px solid white",
                    minHeight: " 50px",
                    width: "50%",
                  }}
                >
                  {courseData.map((item) => {
                    return (
                      <Col>
                        <Row>
                          {item.course_name} ${item.price}
                        </Row>
                      </Col>
                    );
                  })}
                </Container>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
export default MusicHome;
