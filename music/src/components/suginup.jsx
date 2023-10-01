import axios from "axios";
import React, { useState } from "react";
import signupservice from "../service/signupservice";
// import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Suginup = () => {
  const [errmessage, seterrmessage] = useState("");
  const [name, setname] = useState("");
  const changename = (e) => {
    setname(e.target.value);
  };
  const [mail, setmail] = useState("");
  const changemail = (e) => {
    setmail(e.target.value);
  };
  const [account, setaccount] = useState("");
  const changeaccount = (e) => {
    setaccount(e.target.value);
  };
  const [password, setpassword] = useState("");
  const changepassword = (e) => {
    setpassword(e.target.value);
  };
  const [phone, setphone] = useState("");
  const changephone = (e) => {
    setphone(e.target.value);
  };
  const doClick = function () {
    signupservice
      .post(name, mail, phone, account, password)
      .then((data) => {
        alert("註冊成功");
      })
      .catch((e) => {
        alert(e.response.data);
        seterrmessage(e.response.data);
        // console.log(e.response.data);
      });
    // try {
    //   let url = "http://localhost:3502/api/account/signup";
    //   var response = await axios.post(url, signupData);
    //   console.log(response.data);
    //   alert("註冊成功");
    // } catch (e) {
    //
    // }
    window.location = "/api/member/music";
  };

  return (
    <>
      <section className="kobe">
        <div
          className="signup2 d-flex flex-column align-items-center jsutify-content-around "
          style={{ minHeight: "30vh" }}
        >
          {errmessage && <div className="alert alert-danger">{errmessage}</div>}
          <div>
            <Form.Control
              value={name}
              onChange={changename}
              type="text"
              placeholder="姓名"
            />
            <br />
            <Form.Control
              value={mail}
              onChange={changemail}
              type="email"
              placeholder="g mail"
            />
            <br />
            <Form.Control
              value={phone}
              onChange={changephone}
              type="tel"
              placeholder="電話"
            />
            <br />
            <Form.Control
              value={account}
              onChange={changeaccount}
              type="text"
              placeholder="帳號"
            />
            <br />
            <Form.Control
              value={password}
              onChange={changepassword}
              type="password"
              placeholder="密碼"
            />
          </div>
          <input type="button" value="註冊" onClick={doClick} />
        </div>
      </section>
    </>
  );
};

export default Suginup;
