import React, { useState, useRef } from "react";
import "../styles/navbar.css";
import _ from "lodash";

export default function Home({ updatePageType }) {
  return (
    <a href="#" className="button home" onClick={() => updatePageType()}>
      Home
    </a>
  );
}
