import React, { useState } from "react";
import { Form } from "react-bootstrap";
import signuping from "../service/signupservice";
const FormGroup = ({ theArray, theState, location }) => {
  const [fillForm, setFillForm] = useState({ ...theState });
  const change = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFillForm({ ...fillForm, [name]: value });
  };

  const doClick = function () {
    signuping
      .post({ ...fillForm })
      .then((data) => {
        console.log(data);
        alert("註冊成功");
      })
      .catch((e) => {
        alert(e.response.data);
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
      <Form.Group>
        <Form.Control
          name="role"
          onChange={change}
          placeholder="role"
          type="text"
          id="student"
        />
        <br></br>
      </Form.Group>
      <input
        type="button"
        value={location === "/signup" ? "註冊" : "登入"}
        onClick={doClick}
      />
    </>
  );
};

export default FormGroup;
