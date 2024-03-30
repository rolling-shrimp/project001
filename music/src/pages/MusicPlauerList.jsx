import React, { useState } from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

import { musicTracks } from "./musicTracks";
import { useLocation } from "react-router-dom";
import Main from "../components/Main";

const MusicPlauerList = () => {
  const location = useLocation();
  const genreType = location.pathname.slice(8);
  console.log(genreType);
  let trackToshow = musicTracks.filter((item) => genreType === item.type);
  console.log(trackToshow);
  console.log(trackToshow.musics);
  const [track /**/] = useState(trackToshow[0]);

  return (
    <Container style={{ backgroundColor: "rgb(228, 226, 226)" }} fluid>
      <Row>
        <Col style={{ backgroundColor: "gray" }} md={4}>
          <section className="lefft" id="lefft">
            <div class="elbum d-flex flex-column align-items-center">
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
              className="d-flex flex-row align-items-center justify-content-around "
            >
              {musicTracks.map((item) => (
                <a style={{ color: "white" }} href={`/player/${item.type}`}>
                  {" "}
                  {item.type}
                </a>
              ))}

              {/* <figure>
              <img src={require("../assets/g-funk2.jpg")} alt="" />
              <figcaption></figcaption>
            </figure>
            <figure>
              <img src={require("../assets/lofi2.jpg")} alt="" />
              <figcaption></figcaption>
            </figure>
            <figure>
              <img src={require("../assets/R&B.jpg")} alt="" />
              <figcaption></figcaption>
            </figure> */}
            </div>
          </section>
        </Col>
        <Col md={8}>
          {" "}
          <Main>
            {track.musics.map((item) => (
              <div class="music">
                <h2>{item.name} &nbsp; </h2>
                <audio src={item.src} controls></audio>
                {/* <div class="author">
                  <p>
                    <span>By &nbsp;</span>
                    <span
                      style={{ textDecoration: "underline" }}
                      class="theNmae"
                    >
                    
                    </span>
                  </p>
                </div> */}
              </div>
            ))}
          </Main>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicPlauerList;
