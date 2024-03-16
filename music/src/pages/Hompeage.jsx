import React from "react";
import Introduce from "../components/Introduce";
import Teacher from "../components/Teacher";
import Musicgenre from "../components/Musicgenre";
import "animate.css";
import { Container, Row, Col } from "react-bootstrap";
import "../components/styles/hompage/hompage.css";
const TitleParagraph = ({ h2, children, ptag }) => {
  return (
    <div className="p-1" style={{ color: "white" }}>
      <h5>{h2}</h5>
      <p className={`${ptag} mt-3`}>{children}</p>
    </div>
  );
};

const Hompeage = () => {
  return (
    <Container fluid>
      <div className="filter"></div>

      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <div className="d-flex flex-column justify-content-center align-items-center title">
            <h1 style={{ color: "white " }}>入魂音樂，你的音樂</h1>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row className="theSpace "></Row>
      <Row className="backgroundColor">
        <Col md={2}></Col>

        <Col className="hoverAnimate">
          <TitleParagraph ptag={"homepagePtag"} h2={"簡介"}>
            <Introduce />
          </TitleParagraph>
        </Col>

        <Col className="hoverAnimate">
          <TitleParagraph ptag={"homepagePtag"} h2={"師資介紹: Häruki"}>
            <Teacher />
          </TitleParagraph>
        </Col>
        <Col>
          <iframe
            title="music address"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14690.85403533569!2d120.1985975!3d22.9975602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3317b089387f1a5!2z5YWl6a2C6Z-z5qiC5bel5L2c5a6k!5e0!3m2!1szh-TW!2stw!4v1673231426294!5m2!1szh-TW!2stw"
            width="200"
            height="150"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row className="theSpace "></Row>
      <Musicgenre />
    </Container>
  );
};

export default Hompeage;
