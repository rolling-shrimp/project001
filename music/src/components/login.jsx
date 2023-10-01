import axios from "axios";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Suginup = () => {
  const [errmessage, seterrmessage] = useState("");
  const [account, setaccount] = useState("");
  const changeaccount = (e) => {
    setaccount(e.target.value);
  };
  const [password, setpassword] = useState("");
  const changepassword = (e) => {
    setpassword(e.target.value);
  };

  const doClick = async function () {
    let signupData = {
      account: account,
      password: password,
    };
    try {
      let url = "http://localhost:3502/api/account/login";
      var response = await axios.post(url, signupData);
      console.log(response.data.token);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      // alert(`${response.data.message}`);

      // console.log(response.data.token);
      window.location = "/api/member/music";
    } catch (e) {
      seterrmessage(e.response.data);
      alert(e.resonse.data);
    }
  };

  return (
    <>
      <section className="kobe">
        <div
          className="signup2 d-flex flex-column align-items-center jsutify-content-around "
          style={{ minHeight: "30vh" }}
        >
          <div>
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
          <input type="button" value="登入" onClick={doClick} />
        </div>
      </section>
    </>
  );
};

export default Suginup;
