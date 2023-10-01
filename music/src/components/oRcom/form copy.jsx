import React, { useState } from "react";
import axios from "axios";

import "../styles/ordersty.css";
import "bootstrap/dist/css/bootstrap.css";

function MusicHome() {
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

  //設定checkbox，雨至少要選擇其中一個選項才能提交的條件

  const [checkboxes, setCheckboxes] = useState([]);
  const handleCheckboxChange = (event) => {
    console.log(event.target);
    const { value, checked } = event.target;
    console.log(value);
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

  // 提交
  var doOkClick = async () => {
    if (checkboxes.length === 0) {
      alert("請至少選擇一首 beat");
      return;
    }
    // const checkboxesData = checkboxes.map((checkboxValue) => ({
    //   checkboxName: checkboxValue,
    // }));
    var dataToServer = {
      username: username,
      usertel: usertel,
      usermail: usermail,
      selectedBeats: checkboxes,
    };
    console.log(dataToServer);

    // try {
    //   // Send form data to main table
    //   var userDataa = await axios.post(
    //     "http://localhost:3502/submit-form",
    //     dataToServer
    //   );
    //   console.log(userDataa.data);

    //   // Successful submission
    //   window.location = "/show-beat-data/" + userDataa.data.id;
    // } catch (error) {
    //   // Handle error
    //   console.log(error);
    // }
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
          <fieldset>
            <legend style={{ color: "white", display: "block" }}>
              選擇想要的beat(可複選)
            </legend>
            <div class="choosesong d-flex flex-column">
              <span>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="box"
                  placeholder=""
                  onChange={handleCheckboxChange}
                  value="001 Dark 98bpm"
                />
                <label htmlFor="box">001 Dark 98bpm</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  name="checkbox1"
                  id="box1"
                  onChange={handleCheckboxChange}
                  value="002 Cloudy Street 98bpm"
                />
                <label htmlFor="box1" required>
                  002 Cloudy Street 98bpm
                </label>
              </span>
              <span>
                <input
                  type="checkbox"
                  name="checkbox2"
                  id="box2"
                  onChange={handleCheckboxChange}
                  value=" 003 Cloudy Street 2.0 98bpm"
                />
                <label htmlFor="box2" required>
                  003 Cloudy Street 2.0 98bpm
                </label>
              </span>
              <span>
                <input
                  type="checkbox"
                  name="checkbox3"
                  id="box3"
                  onChange={handleCheckboxChange}
                  value="004 Sampled from Jazz 98bpm"
                />
                <label htmlFor="box3" required>
                  004 Sampled from Jazz 98bpm
                </label>
              </span>
              <span>
                <input
                  type="checkbox"
                  name="checkbox4"
                  id="box4"
                  onChange={handleCheckboxChange}
                  value="005 Day Dreaming 98bpm"
                />
                <label htmlFor="box4" required>
                  005 Day Dreaming 98bpm
                </label>
              </span>
              <span>
                <input
                  type="checkbox"
                  name="checkbox5"
                  id="box5"
                  onChange={handleCheckboxChange}
                  value=" 006 Sampled from 1970s R&B 87.5bpm"
                />
                <label htmlFor="box5" required>
                  006 Sampled from 1970s R&B 87.5bpm
                </label>
              </span>
              <span>
                <input
                  type="checkbox"
                  name="checkbox6"
                  id="box6"
                  onChange={handleCheckboxChange}
                  value=" 007 Bind 98bpm"
                />
                <label htmlFor="box6" required>
                  007 Bind 98bpm
                </label>
              </span>
            </div>
          </fieldset>
          <input type="button" value="確定" onClick={doOkClick} />
        </form>
      </section>
    </>
  );
}
export default MusicHome;
