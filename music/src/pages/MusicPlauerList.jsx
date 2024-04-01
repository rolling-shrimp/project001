import React, { useState } from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { musicTracks } from "./musicTracks";
import { useLocation } from "react-router-dom";
import Main from "../components/Main";
import TheCatchLocation from "./theCatchLocation";

const MusicPlauerList = ({ setLocation }) => {
  TheCatchLocation(setLocation);
  const location = useLocation();
  const genreType = location.pathname.slice(8);
  let trackToshow = musicTracks.filter((item) => genreType === item.type);
  const [track /**/] = useState(trackToshow[0]);

  return (
    <Container style={{ backgroundColor: "rgb(228, 226, 226)" }} fluid>
      <Row>
        <Col
          className=" d-flex flex-column align-items-center justify-content-center"
          style={{ backgroundColor: "gray" }}
          md={4}
        >
          <section className="leftSide w-100 p-5  d-flex flex-column align-items-center justify-content-start">
            <div class="h-50 d-flex flex-column justify-content-center align-items-center">
              <Figure className="figureElement">
                <Figure.Image
                  width={150}
                  height={150}
                  src={track.imgSrc}
                  alt=""
                />
              </Figure>
            </div>
            <div
              id="rotate"
              className="w-100 d-flex flex-row align-items-center justify-content-around "
            >
              {musicTracks.map((item) => (
                <a style={{ color: "white" }} href={`/player/${item.type}`}>
                  {" "}
                  {item.type}
                </a>
              ))}
            </div>
          </section>
        </Col>
        <Col
          className=" d-flex flex-column align-items-center justify-content-center"
          md={8}
        >
          {" "}
          <Main>
            {track.musics.map((item) => (
              <div
                style={{ border: "solid 1px black" }}
                className="w-75 p-1 mb-2"
              >
                <h2>{item.name} &nbsp; </h2>
                <audio src={item.src} controls></audio>
                <div>
                  <p>
                    <span>By &nbsp;</span>
                    <span style={{ textDecoration: "underline" }}>
                      {item.author}
                    </span>
                    <span>&nbsp;</span>
                    <a href={item.ahthorLink}>
                      <img
                        className="imgIcon"
                        src={require("../components/assets/instagram.png")}
                      />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </Main>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicPlauerList;
