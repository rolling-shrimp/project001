import React, { useState, useContext, useCallback, useMemo } from "react";
import { Form } from "react-bootstrap";
import signuping from "../service/signupservice";
import authService from "./authservice";
import profileServicing from "../service/profile_Service";
import { useNavigate } from "react-router-dom";
import { objectFromAppjs } from "../App";
import Swal from "sweetalert2";

const SWAL_CONFIG = {
  confirmButtonColor: "black",
};

const FormGroup = ({ theArray, theState, location }) => {
  const { setcurrentuser, currentuser } = useContext(objectFromAppjs);
  const navigate = useNavigate();

  const initialFormState = useMemo(
    () => (location === "/signup" ? { ...theState, role: "student" } : { ...theState }),
    [location, theState]
  );

  const [fillForm, setFillForm] = useState(initialFormState);

  const change = useCallback((e) => {
    const { name, value } = e.target;
    setFillForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const doClick = useCallback(() => {
    signuping
      .post({ ...fillForm, location })
      .then((data) => {
        if (location === "/login") {
          localStorage.setItem("user", JSON.stringify(data.data));
          Swal.fire({
            title: "登入成功，前往首頁",
            icon: "success",
            confirmButtonText: "確定",
            ...SWAL_CONFIG,
          });
          setcurrentuser(authService.getCurrentUser());
          navigate("/");
        } else {
          Swal.fire({
            title: "註冊成功",
            icon: "success",
            confirmButtonText: "確定",
            ...SWAL_CONFIG,
          });
        }
      })
      .catch((e) => {
        Swal.fire({
          text: "發生錯誤",
          icon: "error",
          ...SWAL_CONFIG,
        });
        console.error(e.response?.data);
      });
  }, [fillForm, location, navigate, setcurrentuser]);

  const setCoureClick = useCallback(async () => {
    try {
      await profileServicing.createCourse(fillForm);
      Swal.fire("創建成功", "頁面重新載入");
      window.location = "/personalPage";
    } catch (e) {
      console.error(e);
      Swal.fire({
        text: "發生錯誤，創建失敗",
        icon: "error",
        ...SWAL_CONFIG,
      });
    }
  }, [fillForm]);

  const isTextarea = (itemName) => itemName === "description";

  return (
    <>
      {theArray.map((item) => (
        <Form.Group key={item.itemName} className="w-100">
          <Form.Control
            name={item.itemName}
            onChange={change}
            placeholder={item.placeholder}
            type={isTextarea(item.itemName) ? "textarea" : item.type}
            as={isTextarea(item.itemName) ? "textarea" : undefined}
            style={isTextarea(item.itemName) ? { height: "6rem" } : undefined}
          />
          <br />
        </Form.Group>
      ))}
      {!currentuser.token && (
        <input
          type="button"
          value={location === "/signup" ? "註冊" : "登入"}
          onClick={doClick}
        />
      )}
      {currentuser.token && (
        <input type="button" value="創建課程" onClick={setCoureClick} />
      )}
    </>
  );
};

export default FormGroup;
