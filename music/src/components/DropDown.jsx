import React from "react";
import { DropdownButton } from "react-bootstrap";
import Navs from "./Navs";
const DropDown = ({ navArea, currentuser }) => {
  return (
    <DropdownButton
      className="theDropDown"
      id="dropdown-basic-button"
      title="導覽列"
      variant="dark"
    >
      <Navs type="inTheDrop" navArea={navArea} currentuser={currentuser} />
    </DropdownButton>
  );
};

export default DropDown;
