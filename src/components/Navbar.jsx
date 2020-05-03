import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <a className="homeLink" href="">
        Home
      </a>
      <h1 className="Title">Reacstagram</h1>
      <Upload />
    </div>
  );
}
