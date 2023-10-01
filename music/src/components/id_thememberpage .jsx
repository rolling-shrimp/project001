import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "./HpCom/header";
import axios from "axios";
import Authservice from "./authservice";

import Foot from "./HpCom/footer";
import "./styles/styles.css";
import Profile_Service from "../service/profile_Service";
function MusicHome(props) {
  // console.log(theid);
  let { currentuser, setcurrentuser } = props;
  // let [currentuser, setcurrentuser] = useState(Authservice.getCurrentUser());
  console.log(currentuser);

  const [thedatas, setDatas] = useState([]);
  useEffect(() => {
    let theid;

    if (currentuser) {
      theid = currentuser.user.id;
      console.log(theid);
      Profile_Service.get(theid)
        .then((data) => {
          console.log(data);
          setDatas(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      theid = "";
    }
  }, []);

  return (
    <>
      {!currentuser && (
        <>
          <a href="/log">請先登入</a>
        </>
      )}
      {currentuser && (
        <>
          <Header />
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
                style={{
                  color: "white",
                  padding: " 1rem",
                  border: "2px solid white",
                }}
              >
                <h2>你買的課程</h2>
              </div>
            </section>
          </main>

          <Foot />
        </>
      )}
    </>
  );
}
export default MusicHome;
