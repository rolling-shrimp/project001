import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { objectFromAppjs } from "../App";
const Navs = ({ currentuser, navArea, type }) => {
  const logout = useContext(objectFromAppjs);

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

        {currentuser.token ? (
          <>
            <Nav.Item>
              <Nav.Link style={{ color: navArea.color }} href={`/personalPage`}>
                個人頁
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: navArea.color }} onClick={logout}>
                登出
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link style={{ color: navArea.color }} href={"/mcourse"}>
                已開課課程
              </Nav.Link>
            </Nav.Item>
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
