import React from "react";

const TheTitle = ({ children }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center title">
      <h1 style={{ color: "white " }}>{children}</h1>
    </div>
  );
};

export default TheTitle;
