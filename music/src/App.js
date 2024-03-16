import { Routes, Route } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import authService from "./components/authservice";
import "./components/styles/styles.css";
import Navs from "./components/Navs";
import Header from "./components/HpCom/footer";
import Hompeage from "./pages/Hompeage";
import MusicOr from "./components/MuOrder";
import Musicoursee from "./components/MuCourse";
// import Boom from "./components/Beatpages/boombap";
import User from "./components/userData";
import Course from "./components/enrollaData";
import Test from "./components/oRcom/form copy";
import SIGNUP from "./components/signupHom";
import Log from "./components/loginHom";
// import Mem from "./components/thememberpage";
import IDMem from "./components/id_thememberpage ";
// import "bootstrap/dist/css/bootstrap.css";
import "./components/styles/appJs/appjs.css";
function App() {
  let [currentuser, setcurrentuser] = useState(authService.getCurrentUser());
  const checkIfLogIn = useCallback(() => {
    setcurrentuser(authService.getCurrentUser());
  }, []);
  useEffect(() => {
    checkIfLogIn();
  }, [checkIfLogIn]);

  return (
    <div className="App relativePsotion">
      <Container
        style={{ backgroundColor: "black" }}
        className="stickyPosition"
        fluid
      >
        <Row>
          <Col md={1}></Col>
          <Col>
            <div className="note theNav d-flex flex-column align-items-start justify-content-center ">
              <i class="fa-solid fa-circle-play"></i>
            </div>
          </Col>
          <Col>
            <Navs currentuser={currentuser} />
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<Hompeage />} />

        <Route
          path="/morder"
          element={
            <MusicOr
              currentuser={currentuser}
              setcurrentuser={setcurrentuser}
            />
          }
        />
        <Route
          path="/mcourse"
          element={
            <Musicoursee
              currentuser={currentuser}
              setcurrentuser={setcurrentuser}
            />
          }
        />
        {/* <Route path="/:id" element={<Boom />} /> */}
        <Route path="/test" element={<Test />} />
        <Route path="/signup" element={<SIGNUP />} />
        <Route path="/log" element={<Log />} />
        <Route path="/show-beat-data/:id" element={<User />} />
        <Route path="/show-course-data/:id" element={<Course />} />
        <Route
          path="/api/member/music"
          element={
            <IDMem currentuser={currentuser} setcurrentuser={setcurrentuser} />
          }
        />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
