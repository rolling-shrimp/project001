import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  signupItems,
  signupState,
  loginItems,
  loginState,
  createCourseItems,
  courseState,
} from "./fotmItems";
import FormGroup from "./FormGroup";
import { objectFromAppjs } from "../App";
const FormToFill = () => {
  const location = useLocation();
  const { currentuser } = useContext(objectFromAppjs);
  return (
    <>
      {/* {errmessage && <div className="alert alert-danger">{errmessage}</div>} */}
      <Form className="FormArea d-flex flex-column align-items-center justify-content-center">
        {location.pathname === "/signup" && (
          <FormGroup
            theArray={signupItems}
            theState={signupState}
            location={location.pathname}
          />
        )}

        {location.pathname === "/login" && (
          <FormGroup
            theArray={loginItems}
            theState={loginState}
            location={location.pathname}
          />
        )}

        {location.pathname === "/personalPage" &&
          currentuser &&
          currentuser.user.role === "instructor" && (
            <FormGroup
              theArray={createCourseItems}
              theState={courseState}
              location={location.pathname}
            />
          )}
      </Form>
    </>
  );
};

export default FormToFill;
