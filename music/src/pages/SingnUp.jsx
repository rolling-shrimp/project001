import React, { useContext } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import TheCatchLocation from "./theCatchLocation";
import FormArea from "../components/FormArea";
import FormToFill from "../components/FormToFill";
import TheTitle from "../components/TheTitle";
import { objectFromAppjs } from "../App";

const SingnUp = ({ setLocation }) => {
  const location = useLocation();
  const { data } = useContext(objectFromAppjs);
  TheCatchLocation(setLocation);

  return (
    <Container fluid>
      <TheTitle>
        {location.pathname === "/signup" ? "會員註冊" : "會員登入"}
      </TheTitle>
      <FormArea>
        {data.length !== 0 ? (
          <FormToFill />
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center h-50">
            <h3>
              {" "}
              後端api是架設在免費的server上，會有server休眠時間，大概一分鐘，請耐心等候
            </h3>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </FormArea>
    </Container>
  );
};

export default SingnUp;
