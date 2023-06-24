import React, { Component } from "react";
import Foot from "../HpCom/footer";
import "../styles/boombastyle.css";
function Header() {
  return (
    <>
      <header>
        <h1 id="music">R&B</h1>
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
        <section class="lefft" id="lefft">
          <div class="elbum d-flex flex-column align-items-center">
            <figure>
              <img id="boombapp" src={require("../assets/R&B.jpg")} alt="" />
              <figcaption>
                <span>R&B</span>
              </figcaption>
            </figure>
          </div>
          <div
            id="rotate"
            className="d-flex flex-row align-items-center justify-content-around "
          >
            <a href={"/boom"} target="blank">
              BoomBap
            </a>
            <a href={"/gfunk"} target="blank">
              G-Funk
            </a>
            <a href={"/lofi"} target="blank">
              Lo-Fi
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
            <img class="boom" src={require("../assets/BINDDDDDD.jpg")} alt="" />
            <div class="music">
              <h2>
                007 Bind &nbsp;{" "}
                <span style={{ color: "cadetblue" }}> 87.5bpm</span>{" "}
              </h2>
              <audio src={require("../assets/bind.mp3")} controls></audio>
              <div class="author">
                <p>
                  <span>By &nbsp;</span>
                  <span style={{ textDecoration: "underline" }} class="theNmae">
                    Haruki{" "}
                  </span>
                  &nbsp;&nbsp;
                  <a target="_blank" href="https://www.instagram.com/harukidj/">
                    <img src={require("../assets/instagram.png")} alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    target="_blank"
                    href="https://soundcloud.com/haruki-dj?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
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
