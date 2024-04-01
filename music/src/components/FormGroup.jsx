import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import signuping from "../service/signupservice";
import authService from "./authservice";
import { useNavigate } from "react-router-dom";
import { objectFromAppjs } from "../App";
const FormGroup = ({ theArray, theState, location }) => {
  const { setcurrentuser } = useContext(objectFromAppjs);
  const [fillForm, setFillForm] = useState(
    location === "/signup" ? { ...theState, role: "student" } : { ...theState }
  );
  const navigate = useNavigate();
  const change = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFillForm({ ...fillForm, [name]: value });
  };

  const doClick = function () {
    signuping
      .post({ ...fillForm, location })
      .then((data) => {
        console.log(data);
        if (location === "/login") {
          localStorage.setItem("user", JSON.stringify(data.data));
          alert("登入成功，即將前往首頁");
          setcurrentuser(authService.getCurrentUser());
          navigate("/");
        } else {
          console.log(data);
          alert("成功");
        }
      })
      .catch((e) => {
        alert("發生錯誤");
        console.log(e.response.data);
        // seterrmessage(e.response.data);
      });

    // window.location = "/api/member/music";
  };
  return (
    <>
      {theArray.map((item) => (
        <Form.Group>
          <Form.Control
            name={item.itemName}
            onChange={change}
            placeholder={item.placeholder}
            type={item.type}
          />
          <br></br>
        </Form.Group>
      ))}

      <input
        type="button"
        value={location === "/signup" ? "註冊" : "登入"}
        onClick={doClick}
      />
    </>
  );
};

export default FormGroup;
