import React from "react";
import { Figure, Nav, Button } from "react-bootstrap";
import Main from "./Main";
import { musicType } from "./musicTypeList";
const Musicgenre = () => {
  return (
    <Main>
      <div
        id="genre"
        className="w-100 d-flex flex-column justify-content-start align-items-center "
      >
        <h1 className="mb-5">曲風類別</h1>

        <div className="w-100 d-flex flex-row align-items-center justify-content-evenly">
          {musicType.map((item) => (
            <Figure className="figureElement">
              <Figure.Image src={item.imgSrc} height={150} width={150} alt="" />
              <Figure.Caption className="linkColor">
                <Button variant="light">
                  <Nav.Link
                    href={`player/${item.type}`}
                    rel="noreferrer"
                    target="blank"
                    style={{ display: "block" }}
                  >
                    {item.type}
                  </Nav.Link>
                </Button>
              </Figure.Caption>
            </Figure>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Musicgenre;
