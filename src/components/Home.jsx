import React, { useState, useRef } from "react";
import "../styles/navbar.css";
import _ from "lodash";

export default function Home(props) {
  return (
    <a
      href="#"
      className="button home"
      onClick={() => {
        props.updatePageType();
      }}
    >
      Home
    </a>
  );
}
