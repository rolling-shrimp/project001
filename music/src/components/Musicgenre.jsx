import React from "react";
import { Figure, Nav } from "react-bootstrap";
import Main from "./Main";
import { musicType } from "./musicTypeList";
const Musicgenre = () => {
  return (
    <Main>
      <div
        id="genre"
        className="w-100 d-flex flex-column justify-content-start align-items-center px-5"
      >
        <h1 className="mb-5">曲風類別</h1>

        <div className="w-100 d-flex flex-row align-items-center justify-content-evenly">
          {musicType.map((item) => (
            <Figure className="figureElement">
              <Nav.Link
                href={`player/${item.type}`}
                rel="noreferrer"
                target="blank"
                style={{ display: "block" }}
              >
                <Figure.Image
                  width={150}
                  height={150}
                  src={item.imgSrc}
                  alt=""
                />
              </Nav.Link>
              <Figure.Caption className="linkColor">{item.type}</Figure.Caption>
            </Figure>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Musicgenre;
