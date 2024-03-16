<section className="thefirstsection" id="opp">
  <div
    id="carouselExampleControls"
    className="carouselExampleControls carousel slide w-50"
    data-bs-ride="carousel"
    style={{ border: "solid white 2px" }}
  >
    <div className="carousel-inner">
      <div className="carousel-item active" id="first">
        <img
          src={require("./assets/cat2.png")}
          className="thepic d-block w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src={require("./assets/bass3.jpg")}
          className="thepic d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src={require("./assets/studio.png")}
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
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section>;
