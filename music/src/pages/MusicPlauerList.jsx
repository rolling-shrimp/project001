import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { musicTracks } from "./musicTracks";
import { musicType } from "../components/musicTypeList";
import { useLocation } from "react-router-dom";
import Main from "../components/Main";

// function Boom() {
//   return (
//     <>
//       <main id="boomain">

//         <section class="right">
//           <div class="track">
//             <img class="boom" src={require("../assets/darrrrr.jpg")} alt="" />
//             <div class="music">
//               <h2>
//                 001 Dark &nbsp;{" "}
//                 <span style={{ color: "cadetblue" }}> 98bpm</span>{" "}
//               </h2>
//               <audio src={require("../assets/dark5.mp3")} controls></audio>
//               <div class="author">
//                 <p>
//                   <span>By &nbsp;</span>
//                   <span style={{ textDecoration: "underline" }} class="theNmae">
//                     RollingShrimp{" "}
//                   </span>
//                   &nbsp;&nbsp;
//                   <a
//                     rel="noreferrer"
//                     target="_blank"
//                     href="https://instagram.com/rollingshrimp?igshid=ZDdkNTZiNTM="
//                   >
//                     <img src={require("../assets/instagram.png")} alt="" />
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     rel="noreferrer"
//                     target="_blank"
//                     href="https://soundcloud.com/ox038xlqxjum?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
//                   >
//                     <img src={require("../assets/soundcloud.png")} alt="" />
//                   </a>
//                   &nbsp;&nbsp;
//                   <a rel="noreferrer" target="_blank" href="/morder">
//                     <img src={require("../assets/shop.png")} alt="" />
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div class="track">
//             <img
//               class="boom"
//               src={require("../assets/cloudystreet.jpg")}
//               alt=""
//             />

//           </div>

//           <div class="track">
//             <img class="boom" src={require("../assets/hiphop.jpg")} alt="" />
//             <div class="music">
//               <h2>
//                 003 Cloudy Street 2.0 &nbsp;{" "}
//                 <span style={{ color: "cadetblue" }}>98bpm</span>{" "}
//               </h2>
//               <audio
//                 src={require("../assets/Cloudy_Street_2.mp3")}
//                 controls
//               ></audio>
//               <div class="author">
//                 <p>
//                   <span>By &nbsp;</span>
//                   <span style={{ textDecoration: "underline" }} class="theNmae">
//                     RollingShrimp{" "}
//                   </span>
//                   &nbsp;&nbsp;
//                   <a
//                     rel="noreferrer"
//                     target="_blank"
//                     href="https://instagram.com/rollingshrimp?igshid=ZDdkNTZiNTM="
//                   >
//                     <img src={require("../assets/instagram.png")} alt="" />
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     rel="noreferrer"
//                     target="_blank"
//                     href="https://soundcloud.com/ox038xlqxjum?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
//                   >
//                     <img src={require("../assets/soundcloud.png")} alt="" />
//                   </a>
//                   &nbsp;&nbsp;
//                   <a rel="noreferrer" target="_blank" href="/morder">
//                     <img src={require("../assets/shop.png")} alt="" />
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div class="track">
//             <img
//               class="boom"
//               src={require("../assets/trafficlight.jpg")}
//               alt=""
//             />
//             <div class="music">
//               <h2>
//                 004 Sampled from Jazz &nbsp;{" "}
//                 <span style={{ color: "cadetblue" }}>98bpm</span>{" "}
//               </h2>
//               <audio src={require("../assets/spinner_3.mp3")} controls></audio>
//               <div class="author">
//                 <p>
//                   <span>By &nbsp;</span>
//                   <span style={{ textDecoration: "underline" }} class="theNmae">
//                     RollingShrimp{" "}
//                   </span>
//                   &nbsp;&nbsp;
//                   <a
//                     rel="noreferrer"
//                     target="_blank"
//                     href="https://instagram.com/rollingshrimp?igshid=ZDdkNTZiNTM="
//                   >
//                     <img src={require("../assets/instagram.png")} alt="" />
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     rel="noreferrer"
//                     target="_blank"
//                     href="https://soundcloud.com/ox038xlqxjum?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
//                   >
//                     <img src={require("../assets/soundcloud.png")} alt="" />
//                   </a>
//                   &nbsp;&nbsp;
//                   <a rel="noreferrer" target="_blank" href="/morder">
//                     <img src={require("../assets/shop.png")} alt="" />
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
const MusicPlauerList = () => {
  const location = useLocation();
  const genreType = location.pathname.slice(8);
  console.log(genreType);
  let trackToshow = musicTracks.filter((item) => genreType === item.type);
  console.log(trackToshow);
  console.log(trackToshow.musics);
  const [track /**/] = useState(trackToshow[0].musics);

  return (
    <Container style={{ backgroundColor: "rgb(228, 226, 226)" }} fluid>
      <Row>
        <Col style={{ backgroundColor: "gray" }} md={4}>
          <section className="lefft" id="lefft">
            <div class="elbum d-flex flex-column align-items-center">
              {/* <figure>
              <img
                id="boombapp"
                src={require("../assets/boombap2.jpg")}
                alt=""
              />
              <figcaption>
                <span>BoomBap</span>
              </figcaption>
            </figure> */}
            </div>
            <div
              id="rotate"
              className="d-flex flex-row align-items-center justify-content-around "
            >
              {musicType.map((item) => (
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
            {track.map((item) => (
              <div class="music">
                <h2>
                  002 Cloudy Street &nbsp;{" "}
                  <span style={{ color: "cadetblue" }}>98bpm</span>{" "}
                </h2>
                <audio src={item} controls></audio>
                <div class="author">
                  <p>
                    <span>By &nbsp;</span>
                    <span
                      style={{ textDecoration: "underline" }}
                      class="theNmae"
                    >
                      RollingShrimp{" "}
                    </span>
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
