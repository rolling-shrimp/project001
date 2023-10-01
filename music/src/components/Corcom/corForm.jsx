import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Authservice from "../authservice";
import enterUserData from "../../service/enterUserData";
import "../styles/styles2.css";
import "animate.css";
function MusicHome() {
  const navigate = useNavigate();
  let [currentuser, setcurrentuser] = useState(Authservice.getCurrentUser());
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(checkboxes);
    if (checkboxes.length === 0) {
      alert("請至少選擇一個課程");
      return;
    }
  };
  var doOkClick2 = async () => {
    if (checkboxes.length === 0) {
      alert("請至少選擇一個課程");
      return;
    }
    const checkboxesData = checkboxes.map((checkboxValue) => ({
      checkboxName: checkboxValue,
    }));
    var dataToServer = {
      id: currentuser.user.id,
      selectedCourse: checkboxesData,
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
        "http://localhost:3502/api/member/memberbuycourse",
        dataToServer,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(userDataa.data);
      let j = userDataa.data.id;
      navigate(`/api/member/music`);

      // Successful submission
      // window.location = "/show-beat-data/" + userDataa.data.id;
      alert("存取成功，你的個人頁詳細資料會有新紀錄");
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  var doOkClick = async () => {
    const checkboxesData = checkboxes.map((checkboxValue) => ({
      checkboxName: checkboxValue,
    }));
    var dataToServer = {
      username: username,
      usertel: usertel,
      usermail: usermail,
      selectedCourses: checkboxesData,
    };
    console.log(dataToServer);

    try {
      // Send form data to main table

      var userDataa = await axios.post(
        "http://localhost:3502/submit-course",
        dataToServer
      );
      console.log(userDataa.data);
      // Successful submission
      window.location = "/show-course-data/" + userDataa.data.id;
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  return (
    <>
      <main className="courmain" id="courmain">
        <section className="seccc11" style={{ minHeight: "unset" }}>
          <form className="courform" action="" onSubmit={handleSubmit}>
            {!currentuser && (
              <>
                <div>
                  <label htmlFor="name">名字</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="留下名字吧~"
                    value={username}
                    onChange={usernameChange}
                  />
                  <span></span>
                </div>
                <div>
                  <label htmlFor="number">電話</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="留下電話吧~"
                    value={usertel}
                    onChange={usertelChange}
                  />
                  <span></span>
                </div>
                <div>
                  <label htmlFor="mail">信箱</label>
                  <input
                    type="email"
                    name="gmail"
                    placeholder="留下信箱吧~"
                    required
                    value={usermail}
                    onChange={usermailChange}
                  />
                  <span></span>
                </div>
              </>
            )}
            <div
              className="THEX d-flex flex-column justify-content-center align-items-center"
              style={{
                border: "white 2px solid",

                paddingTop: "1rem",
                paddingBottom: "1REM",
                marginTop: "1REM",
              }}
            >
              <fieldset
                className="d-flex flex-column align-items-center "
                style={{ width: "90%" }}
              >
                <legend
                  style={{
                    color: "white",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  想上甚麼
                </legend>
                <div className="choosecoursee d-flex flex-column align-items-center">
                  <span>
                    <input
                      type="checkbox"
                      name="checkbox"
                      placeholder=""
                      value="數位編曲課程"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="box">數位編曲課程</label>
                  </span>

                  <span>
                    <input
                      type="checkbox"
                      name="checkbox1"
                      value="混音課程"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="box1" required>
                      混音課程
                    </label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="checkbox2"
                      value="獨立音樂人課程"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="box2" required>
                      獨立音樂人課程
                    </label>
                  </span>
                </div>
              </fieldset>
              {/* <button type="submit">提交</button> */}
              {!currentuser && (
                <input
                  type="button"
                  value="提交"
                  style={{ color: "black" }}
                  onClick={doOkClick}
                />
              )}

              {currentuser && (
                <input
                  style={{ color: "black" }}
                  type="button"
                  value="提交"
                  onClick={doOkClick2}
                />
              )}
              <h4 style={{ color: "white", marginTop: "1rem" }}>
                請繼續往下滑
              </h4>
            </div>
          </form>
        </section>
        <div
          className="coursefilm d-flex flex-column justify-content-center align-items-center"
          style={{ width: "100%", position: "relative", padding: "4rem" }}
        >
          <div
            style={{
              backgroundColor: "gray",
              position: "absolute",
              zIndex: "-1",
              height: "100%",
              width: "100%",
              opacity: "0.5",
            }}
          ></div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 style={{ color: "white" }}>上課影片</h2>
            <p style={{ color: "white", textAlign: "center" }}>
              這是在入魂音樂實體上課的影片，
              <br />
              主要是要讓大家了解在音樂工作室上課的樣貌，
              <br />
              老師會很用心現場示範並且解說他自己設計音樂斷落和音色的構思，
              <br />
              也會告訴學生有甚麼該注意的地方，教學用心。
            </p>
          </div>
          <video
            className="vidd"
            controls
            src={require("../assets/thestudiooj.mp4")}
            loop
            muted
            autoPlay
            style={{ width: "80%", height: "500px", objectFit: "cover" }}
          ></video>
        </div>
      </main>
    </>
  );
}
export default MusicHome;
