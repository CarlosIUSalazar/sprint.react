import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";
import Home from "./Home";

export default function Navbar({ updatePageType, uploadPhoto }) {
  return (
    <>
      <div className="navbarContainer">
        <Home updatePageType={updatePageType} />
        <Upload uploadPhoto={uploadPhoto} />
      </div>
    </>
  );
}
