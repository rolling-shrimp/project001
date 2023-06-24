import React from "react";
import Header from "./HpCom/header";
import Mainstuff from "./Mp3com/main";
import Foot from "./HpCom/footer";
import "./styles/styles.css";
function MusicHome() {
  return (
    <>
      <Header />
      <Mainstuff />
      <Foot />
    </>
  );
}
export default MusicHome;
