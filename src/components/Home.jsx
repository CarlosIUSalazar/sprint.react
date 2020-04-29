import React from "react";
import "../styles/navbar.css";
import _ from "lodash";

export default function Home(props) {
  return (
    <a href="#" class="button home" onClick={props.onClick}>
      Home
    </a>
  );
}
