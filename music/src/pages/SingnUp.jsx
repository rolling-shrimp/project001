import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import FormArea from "../components/FormArea";
import FormToFill from "../components/FormToFill";
import TheTitle from "../components/TheTitle";
const SingnUp = () => {
  const location = useLocation();
  return (
    <Container fluid>
      <TheTitle>
        {location.pathname === "/signup" ? "會員註冊" : "會員登入"}
      </TheTitle>

      <FormArea>
        <FormToFill />
      </FormArea>
    </Container>
  );
};

export default SingnUp;
