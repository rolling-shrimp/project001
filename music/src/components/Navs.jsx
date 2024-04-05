import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Navs = ({ setcurrentuser, currentuser, navArea, type }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    Swal.fire({ title: "登出成功，回到首頁", confirmButtonColor: "black" });
    setcurrentuser({ token: null, user: { id: null, role: null } });
    window.location = "/";
  };

  return (
    <div
      className={`theNav ${
        type === "outOfDrop" ? "theNavSmall" : "theNavInDrop"
      } `}
    >
      <Nav>
        <Nav.Item>
          <Nav.Link style={{ color: navArea.color }} href={"/"}>
            首頁
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href={"#genre"} style={{ color: navArea.color }}>
            音樂音檔
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link style={{ color: navArea.color }} href={"/mcourse"}>
            課程報名
          </Nav.Link>
        </Nav.Item>
        {currentuser.token ? (
          <>
            <Nav.Item>
              <Nav.Link style={{ color: navArea.color }} href={`/personalPage`}>
                個人頁
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ color: navArea.color }}
                onClick={logout}
                href="#"
              >
                登出
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link style={{ color: navArea.color }} href={"/signup"}>
                註冊會員
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: navArea.color }} href={"/login"}>
                會員登入
              </Nav.Link>
            </Nav.Item>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Navs;
