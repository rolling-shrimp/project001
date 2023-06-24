import React from "react";

import "../styles/style4.css";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";

function MusicHome() {
  return (
    <>
      <main className="d-flex flex-column justify-content-center">
        <section className="thefirstsection" id="opp">
          <h1>內部環境</h1>
          <div
            id="carouselExampleControls"
            className="carouselExampleControls carousel slide w-50"
            data-bs-ride="carousel"
            style={{ border: "solid white 2px" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active" id="first">
                <img
                  src={require("../assets/cat2.png")}
                  className="thepic d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../assets/bass3.jpg")}
                  className="thepic d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={require("../assets/studio.png")}
                  className="thepic d-block w-100"
                  alt="..."
                  style={{ objectPosition: "bottom 20px" }}
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <div class="section2 d-flex flex-column justify-content-start align-items-center px-5">
          <h1>曲風類別</h1>

          <div className="section2-1">
            <figure>
              <img src={require("../assets/boombap2.jpg")} alt="" />
              <figcaption>
                <a href={"/boom"} target="blank">
                  BoomBap
                </a>
              </figcaption>
            </figure>
            <figure>
              <img src={require("../assets/g-funk2.jpg")} alt="" />
              <figcaption>
                <a href={"/gfunk"} target="blank">
                  G-Funk
                </a>
              </figcaption>
            </figure>
            <figure>
              <img src={require("../assets/lofi2.jpg")} alt="" />
              <figcaption>
                <a href={"/lofi"} target="blank">
                  Lo-Fi
                </a>
              </figcaption>
            </figure>
            <figure>
              <img src={require("../assets/R&B.jpg")} alt="" />
              <figcaption>
                <a href={"/RNB"} target="blank">
                  R&B
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </main>
    </>
  );
}
export default MusicHome;
