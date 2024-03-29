import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import signuping from "../service/signupservice";
import { signupItems, signupState, loginItems, loginState } from "./fotmItems";
import FormGroup from "./FormGroup";
const FormToFill = () => {
  const location = useLocation();

  return (
    <>
      {/* {errmessage && <div className="alert alert-danger">{errmessage}</div>} */}
      <Form className="FormArea d-flex flex-column align-items-center justify-content-center">
        {location.pathname === "/signup" ? (
          <FormGroup
            theArray={signupItems}
            theState={signupState}
            location={location.pathname}
          />
        ) : (
          <FormGroup
            theArray={loginItems}
            theState={loginState}
            location={location.pathname}
          />
        )}
      </Form>
    </>
  );
};

export default FormToFill;
