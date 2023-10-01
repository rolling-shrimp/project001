import React, { useState, useEffect } from "react";
import Authservice from "../authservice";
function Header() {
  let [currentuser, setcurrentuser] = useState(null);
  useEffect(() => {
    setcurrentuser(Authservice.getCurrentUser());
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    alert("你已經登出，頁面回到首頁");
    window.location = "/";
  };
  return (
    <>
      <header>
        <h1 id="music">入魂音樂，你的音樂</h1>
      </header>
      <nav>
        <ul>
          {!currentuser && (
            <>
              <a href={"/"}>首頁</a>
              <a href={"/mp3"}>音樂音檔</a>
              <a href={"/morder"}>下單區</a>
              <a href={"/mcourse"}>課程報名</a>
              <a href={"/signup"}>註冊會員</a>
              <a href={"/log"}>會員登入</a>
            </>
          )}

          {currentuser && (
            <>
              <a href={"/"}>首頁</a>
              <a href={"/mp3"}>音樂音檔</a>
              <a href={"/morder"}>下單區</a>
              <a href={"/mcourse"}>課程報名</a>
              <a href={`/api/member/music`}>個人頁</a>
              <button onClick={logout} type="button">
                登出
              </button>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
export default Header;
