import React, { useState, useEffect } from "react";
import axios from "axios";
import Authservice from "../authservice";
import everybodyservice from "../everybodyservice";
import enterUserData from "../../service/enterUserData";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styles/ordersty.css";
import "bootstrap/dist/css/bootstrap.css";

function MusicHome(props) {
  const [, /* ignored*/ seta] = useState("");
  let [productss, setproductss] = useState([]);
  useEffect(() => {
    everybodyservice
      .get()
      .then((e) => {
        setproductss(e.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const usernameChange = (event) => {
    setUsername(event.target.value);
  };
  const [usertel, setUsertel] = useState("");
  const usertelChange = (event) => {
    setUsertel(event.target.value);
  };
  const [usermail, setUsermail] = useState("");
  const usermailChange = (event) => {
    setUsermail(event.target.value);
  };
  // let { currentuser, setcurrentuser } = props;
  let [currentuser /* ignored*/] = useState(Authservice.getCurrentUser());

  //設定checkbox，雨至少要選擇其中一個選項才能提交的條件

  const [checkboxes, setCheckboxes] = useState([]);
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckboxes((prevCheckboxes) => [...prevCheckboxes, value]);
    } else {
      setCheckboxes((prevCheckboxes) =>
        prevCheckboxes.filter((checkbox) => checkbox !== value)
      );
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(checkboxes);
    if (checkboxes.length === 0) {
      alert("請至少選擇一首 beat");
      return;
    }
  };
  // console.log(currentuser);

  // 提交
  var doOkClick = async () => {
    if (checkboxes.length === 0) {
      alert("請至少選擇一首 beat");
      return;
    }
    const checkboxesData = checkboxes.map((checkboxValue) => ({
      checkboxName: checkboxValue,
    }));
    // var dataToServer = {
    //   username: username,
    //   usertel: usertel,
    //   usermail: usermail,
    //   selectedBeats: checkboxesData,
    // };
    // console.log(dataToServer);

    try {
      // Send form data to main table
      var userDataa = await enterUserData.post(
        username,
        usertel,
        usermail,
        checkboxesData
      );

      seta(userDataa.data);

      // var userDataa = await axios.post(
      //   "http://localhost:3502/submit-form",
      //   dataToServer
      // );
      console.log(userDataa.data);

      // Successful submission
      window.location = "/show-beat-data/" + userDataa.data.id;
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };
  var doOkClick2 = async () => {
    if (checkboxes.length === 0) {
      alert("請至少選擇一首 beat");
      return;
    }
    const checkboxesData = checkboxes.map((checkboxValue) => ({
      checkboxName: checkboxValue,
    }));
    var dataToServer = {
      id: currentuser.user.id,
      selectedBeats: checkboxesData,
    };
    console.log(dataToServer);

    try {
      // Send form data to main table
      let token;

      if (localStorage.getItem("user")) {
        token = JSON.parse(localStorage.getItem("user")).token;
        console.log(token);
      } else {
        token = "";
      }
      var userDataa = await axios.post(
        "http://localhost:3502/api/member/memberbuying",
        dataToServer,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(userDataa.data);

      navigate(`/api/member/music`);

      // Successful submission
      // window.location = "/show-beat-data/" + userDataa.data.id;
      alert("存取成功，你的個人頁詳細資料會有新紀錄");
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  return (
    <>
      <section className="orderSec">
        <form
          onSubmit={handleSubmit}
          className="orderformm"
          action=" "
          method="post"
        >
          {" "}
          {!currentuser && (
            <>
              <div>
                <label htmlFor="name">姓名</label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="請輸入姓名"
                  required
                  value={username}
                  onChange={usernameChange}
                />
                <span></span>
              </div>
              <div>
                <label htmlFor="telp">電話</label>
                <input
                  type="tel"
                  name="telp"
                  id="telp"
                  placeholder="請輸入電話"
                  required
                  value={usertel}
                  onChange={usertelChange}
                />
                <span></span>
              </div>
              <div>
                <label htmlFor="eadd">信箱</label>
                <input
                  type="email"
                  name="email"
                  id="eadd"
                  placeholder="請輸入email"
                  required
                  value={usermail}
                  onChange={usermailChange}
                />
                <span></span>
              </div>
            </>
          )}
          <fieldset>
            <legend style={{ color: "white", display: "block" }}>
              選擇想要的beat(可複選)
            </legend>
            <div class="choosesong d-flex flex-column">
              {productss.map((item) => (
                <span key={item.id}>
                  <input
                    type="checkbox"
                    value={item.product_name}
                    name=""
                    id={item.id}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={item.id}>{item.product_name}</label>
                </span>
              ))}
            </div>
          </fieldset>
          {!currentuser && (
            <input type="button" value="確定" onClick={doOkClick} />
          )}
          {currentuser && (
            <input type="button" value="確定" onClick={doOkClick2} />
          )}
        </form>
      </section>
    </>
  );
}
export default MusicHome;
