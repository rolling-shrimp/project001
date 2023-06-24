import React, { Component } from "react";
function Header() {
  return (
    <>
      <header>
        <h1 id="music">入魂音樂，你的音樂</h1>
      </header>
      <nav>
        <ul>
          <a href={"http://localhost:3000"}>首頁</a>
          <a href={"http://localhost:3000/mp3"}>音樂音檔</a>
          <a href={"http://localhost:3000/morder"}>下單區</a>
          <a href={"http://localhost:3000/mcourse"}>課程報名</a>
        </ul>
      </nav>
    </>
  );
}
export default Header;
