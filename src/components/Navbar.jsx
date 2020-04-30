import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";
import Home from "./Home";

export default function Navbar(props) {
  return (
    <>
      <div className="navbarContainer">
        <Home />
        <Upload onChange={props.onChange} />
      </div>
    </>
  );
}
