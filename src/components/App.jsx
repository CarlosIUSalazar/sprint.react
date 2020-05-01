import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import NavBar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import Home from "./Home";
import Upload from "./Upload";

import { listObjects, getSingleObject, saveObject } from "../utils/index";

//==============================vv The App() vv===============================//
export default function App() {
  const [currentView, setCurrentView] = useState("SinglePhoto");
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");
  //------------------------ ^^ The different states ^^ ------------------------//

  async function getPhotos(props) {
    const listOfPromiseObjs = await listObjects();
    const arrayOfPromises = listOfPromiseObjs.map(el => el.Key);
    const arrayOfBase64Strings = await Promise.all(
      arrayOfPromises.map(item => getSingleObject(item))
    );
    const result = arrayOfBase64Strings.map(
      el => "data:image/jpg;base64," + el
    );
    setPhotos(result);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    const currentStateOfphotos = [...photos];
    currentStateOfphotos.unshift(selectedPhoto);
    setPhotos(currentStateOfphotos);
  }, [selectedPhoto]);

  let singleImage = [];

  // function that is passed to 'AllPhotos' child as a property
  const displayPhotos = () => {
    const tenPhotos = [];
    for (let i = 0; i < 12; i++) {
      tenPhotos.push(photos[i]);
    }
    return tenPhotos.map((value, index) => {
      return (
        <img
          src={value}
          key={index}
          height="100"
          width="200"
          alt="🙈🙉🙊"
          onClick={() => {
            singleImage.push(value);
          }}
        ></img>
      );
    });
  };

  // function that is passed to 'Home' child as a property
  function updatePageType() {
    console.log("--- HOME was clicked, updatePageType() called --------"); // <-- not logging
    setCurrentView("AllPhotos");
  }

  function changeToSinglePhoto() {
    setCurrentView("singlePhoto");
  }

  function uploadPhoto(e) {
    setSelectedPhoto(URL.createObjectURL(e.target.files[0])); //change status of selectedPhoto
  }

  //------------------ vv gets rendered to the HTML page vv --------------------//
  return (
    <div className="app">
      <h1> *** Its RENDERING - YAY! ***</h1>
      {/* TO BE REMOVED - DEBUGGING ONLY */}
      <p>----------------- ^^^ debug area ^^^ ------------------</p>
      <NavBar updatePageType={updatePageType} uploadPhoto={uploadPhoto} />
      <div className="photo container">
        {currentView === "SinglePhoto" ? (
          <SinglePhoto single={singleImage} />
        ) : (
          <AllPhotos displayPhotos={displayPhotos} />
        )}
      </div>
    </div>
  );
}
