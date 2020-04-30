import React, { useState, useRef } from "react";
import "../styles/navbar.css";
import _ from "lodash";

export default function Home({ onViewUpdate }) {
  // const HomeComponent = ({ onClick = view => view }) => (
  //   <div onClick={onClick} />)

  // const [currentView, setCurrentView] = useState(0);
  // const handleOnClick = () => {
  //   setCurrentView("AllPhotos");
  //   onViewUpdate("AllPhotos")
  // }

  return (
    <a href="#" className="button home">
      Home
    </a>
  );
}
