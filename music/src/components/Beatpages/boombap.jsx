import React, { Component } from "react";
import Foot from "../HpCom/footer";
import "../styles/boombastyle.css";
function Header() {
  return (
    <>
      <header>
        <h1 id="music">BoomBap</h1>
      </header>
      <nav>
        <ul>
          <a target="_blank" href={"/"}>
            首頁
          </a>
          <a target="_blank" href={"./mp3"}>
            音樂音檔
          </a>
          <a target="_blank" href={"./morder"}>
            下單區
          </a>
          <a target="_blank" href={"./mcourse"}>
            課程報名
          </a>
        </ul>
      </nav>
    </>
  );
}
function Boom() {
  return (
    <>
      <Header />
      <main id="boomain">
        <section className="lefft" id="lefft">
          <div class="elbum d-flex flex-column align-items-center">
            <figure>
              <img
                id="boombapp"
                src={require("../assets/boombap2.jpg")}
                alt=""
              />
              <figcaption>
                <span>BoomBap</span>
              </figcaption>
            </figure>
          </div>
          <div
            id="rotate"
            className="d-flex flex-row align-items-center justify-content-around "
          >
            <a href={"/gfunk"} target="blank">
              G-Funk
            </a>
            <a href={"/lofi"} target="blank">
              Lo-Fi
            </a>
            <a href={"/RNB"} target="blank">
              R&B
            </a>

            {/* <figure>
              <img src={require("../assets/g-funk2.jpg")} alt="" />
              <figcaption>
              </figcaption>
            </figure>
            <figure>
              <img src={require("../assets/lofi2.jpg")} alt="" />
              <figcaption>
              </figcaption>
            </figure>
            <figure>
              <img src={require("../assets/R&B.jpg")} alt="" />
              <figcaption>
              </figcaption>
            </figure> */}
          </div>
        </section>
        <section class="right">
          <div class="track">
            <img class="boom" src={require("../assets/darrrrr.jpg")} alt="" />
            <div class="music">
              <h2>
                001 Dark &nbsp;{" "}
                <span style={{ color: "cadetblue" }}> 98bpm</span>{" "}
              </h2>
              <audio src={require("../assets/dark5.mp3")} controls></audio>
              <div class="author">
                <p>
                  <span>By &nbsp;</span>
                  <span style={{ textDecoration: "underline" }} class="theNmae">
                    RollingShrimp{" "}
                  </span>
                  &nbsp;&nbsp;
                  <a
                    target="_blank"
                    href="https://instagram.com/rollingshrimp?igshid=ZDdkNTZiNTM="
                  >
                    <img src={require("../assets/instagram.png")} alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    target="_blank"
                    href="https://soundcloud.com/ox038xlqxjum?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  >
                    <img src={require("../assets/soundcloud.png")} alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a target="_blank" href="/morder">
                    <img src={require("../assets/shop.png")} alt="" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* another track */}
          <div class="track">
            <img
              class="boom"
              src={require("../assets/cloudystreet.jpg")}
              alt=""
            />
            <div class="music">
              <h2>
                002 Cloudy Street &nbsp;{" "}
                <span style={{ color: "cadetblue" }}>98bpm</span>{" "}
              </h2>
              <audio
                src={require("../assets/Cloudy_Street.mp3")}
                controls
              ></audio>
              <div class="author">
                <p>
                  <span>By &nbsp;</span>
                  <span style={{ textDecoration: "underline" }} class="theNmae">
                    RollingShrimp{" "}
                  </span>
                  &nbsp;&nbsp;
                  <a
                    target="_blank"
                    href="https://instagram.com/rollingshrimp?igshid=ZDdkNTZiNTM="
                  >
                    <img src={require("../assets/instagram.png")} alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    target="_blank"
                    href="https://soundcloud.com/ox038xlqxjum?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  >
                    <img src={require("../assets/soundcloud.png")} alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a target="_blank" href="/morder">
                    <img src={require("../assets/shop.png")} alt="" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="track">
            <img class="boom" src={require("../assets/hiphop.jpg")} alt="" />
            <div class="music">
              <h2>
                003 Cloudy Street 2.0 &nbsp;{" "}
                <span style={{ color: "cadetblue" }}>98bpm</span>{" "}
              </h2>
              <audio
                src={require("../assets/Cloudy_Street_2.mp3")}
                controls
              ></audio>
              <div class="author">
                <p>
                  <span>By &nbsp;</span>
                  <span style={{ textDecoration: "underline" }} class="theNmae">
                    RollingShrimp{" "}
                  </span>
                  &nbsp;&nbsp;
                  <a
                    target="_blank"
                    href="https://instagram.com/rollingshrimp?igshid=ZDdkNTZiNTM="
                  >
                    <img src={require("../assets/instagram.png")} alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    target="_blank"
                    href="https://soundcloud.com/ox038xlqxjum?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  >
                    <img src={require("../assets/soundcloud.png")} alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a target="_blank" href="/morder">
                    <img src={require("../assets/shop.png")} alt="" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* <!-- the fourth track --> */}
          <div class="track">
            <img
              class="boom"
              src={require("../assets/trafficlight.jpg")}
              alt=""
            />
            <div class="music">
              <h2>
                004 Sampled from Jazz &nbsp;{" "}
                <span style={{ color: "cadetblue" }}>98bpm</span>{" "}
              </h2>
              <audio src={require("../assets/spinner_3.mp3")} controls></audio>
              <div class="author">
                <p>
                  <span>By &nbsp;</span>
                  <span style={{ textDecoration: "underline" }} class="theNmae">
                    RollingShrimp{" "}
                  </span>
                  &nbsp;&nbsp;
                  <a
                    target="_blank"
                    href="https://instagram.com/rollingshrimp?igshid=ZDdkNTZiNTM="
                  >
                    <img src={require("../assets/instagram.png")} alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    target="_blank"
                    href="https://soundcloud.com/ox038xlqxjum?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  >
                    <img src={require("../assets/soundcloud.png")} alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a target="_blank" href="/morder">
                    <img src={require("../assets/shop.png")} alt="" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* <video
            src={require("../assets/bblack.mp4")}
            controls
            autoPlay
            loop
            style={{
              height: "40%",
              width: "80%",
              marginTop: "2rem",
              border: "2px solid white",
              objectFit: "cover",
            }}
            muted
          ></video> */}
        </section>
      </main>

      <Foot />
    </>
  );
}
export default Boom;
