import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import signuping from "../service/signupservice";
import authService from "./authservice";
import profileServicing from "../service/profile_Service";
import { useNavigate } from "react-router-dom";
import { objectFromAppjs } from "../App";
import swal from "sweetalert2";
const FormGroup = ({ theArray, theState, location }) => {
  const { setcurrentuser, currentuser } = useContext(objectFromAppjs);
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
          swal.fire({
            title: "登入成功，前往首頁",
            icon: "success",

            confirmButtonText: "確定",

            confirmButtonColor: "black ",
          });

          setcurrentuser(authService.getCurrentUser());
          navigate("/");
        } else {
          console.log(data);
          swal.fire({
            title: "註冊成功",
            icon: "success",
            confirmButtonText: "確定",

            confirmButtonColor: "black ",
          });
        }
      })
      .catch((e) => {
        swal.fire({ text: "發生錯誤", icon: "error" });
        console.log(e.response.data);
        // seterrmessage(e.response.data);
      });
  };
  const setCoureClick = async () => {
    try {
      await profileServicing.createCourse(fillForm);
      swal("創建成功", "頁面重新載入");
      navigate("/instructor");
    } catch (e) {
      console.log(e);
      swal("發生錯誤創建失敗");
    }
  };
  return (
    <>
      {theArray.map((item) => (
        <Form.Group>
          <Form.Control
            name={item.itemName}
            onChange={change}
            placeholder={item.placeholder}
            type={item.itemName === "description" ? "textarea" : item.type}
            as={item.itemName === "description" ? "textarea" : undefined}
          />
          <br></br>
        </Form.Group>
      ))}
      {!currentuser && (
        <input
          type="button"
          value={location === "/signup" ? "註冊" : "登入"}
          onClick={doClick}
        />
      )}

      {currentuser && (
        <input type="button" value="創建課程" onClick={setCoureClick} />
      )}
    </>
  );
};

export default FormGroup;
