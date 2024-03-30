import React from "react";
import { Nav } from "react-bootstrap";

const Navs = ({ currentuser, navArea, type }) => {
  const logout = () => {
    localStorage.removeItem("user");
    alert("你已經登出，頁面回到首頁");
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
        {currentuser ? (
          <>
            <Nav.Item>
              <Nav.Link
                style={{ color: navArea.color }}
                href={`/api/member/music`}
              >
                個人頁
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <button onClick={logout} type="button">
                登出
              </button>
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
