import React, { useCallback, useEffect, useState } from "react";
import TheTitle from "../components/TheTitle";
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
  const [itemMd, setItemMd] = useState({
    contentMd1: 3,
    contentMd2: 3,
    contentMd3: 3,
    leftCol: 2,
    rightCol: 1,
  });
  const [width, setWidth] = useState(null);
  const resizeWidth = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.addEventListener("resize", resizeWidth);
    };
  }, [resizeWidth]);
  useEffect(() => {
    if (width != null) {
      width <= 1000
        ? setItemMd({
            ...itemMd,
            contentMd1: 6,
            contentMd2: 4,
            contentMd3: 12,
            leftCol: "auto",
            rightCol: "auto",
          })
        : setItemMd({
            ...itemMd,
            contentMd1: 3,
            contentMd2: 3,
            contentMd3: 3,
            leftCol: 2,
            rightCol: 1,
          });
    }
  }, [width, itemMd]);
  return (
    <Container fluid>
      <Row>
        <TheTitle>{"入魂音樂，你的音樂"}</TheTitle>
      </Row>

      <Row className="theSpace "></Row>
      <Row className="backgroundColor">
        <Col md={itemMd.leftCol}></Col>

        <Col sm={12} md={itemMd.contentMd1} className="hoverAnimate">
          <TitleParagraph ptag={"homepagePtag"} h2={"簡介"}>
            <Introduce />
          </TitleParagraph>
        </Col>

        <Col sm={12} md={itemMd.contentMd2} className="hoverAnimate">
          <TitleParagraph ptag={"homepagePtag"} h2={"師資介紹: Häruki"}>
            <Teacher />
          </TitleParagraph>
        </Col>
        <Col
          className="p-2 d-flex flex-column align-items-center justify-content-center"
          sm={12}
          md={itemMd.contentMd3}
        >
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
        <Col md={itemMd.rightCol}></Col>
      </Row>
      <Row className="theSpace "></Row>
      <Row>
        <Musicgenre />
      </Row>
    </Container>
  );
};

export default Hompeage;
