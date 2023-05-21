import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  return (
    <div
      style={{ display: `${props.show ? "block" : "none"}` }}
      className="Backdrop"
    ></div>
  );
};

export default backdrop;
