import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar.jsx";
import AllPhotos from "./AllPhotos.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import { listObjects, getSingleObject } from "../utils/index.js";

//==============================vv The App() vv===============================//
export default function App() {
  const [photos, setPhotos] = useState([]);
  const [view, setView] = useState("AllPhotos");
  const [chosen, setChosen] = useState();
  //------------------------ ^^ The different states ^^ ------------------------//

  function getPhotosFromS3() {
    listObjects()
      .then(items => {
        let arrayOfPromises = items;
        arrayOfPromises = arrayOfPromises.map(item => {
          return getSingleObject(item.Key);
        });
        let arrayOfResolvedPromises = Promise.all(arrayOfPromises);
        return arrayOfResolvedPromises;
      })
      .then(nextLayer => {
        let arrayOfBase64Strings = nextLayer.map(base64 => {
          return `data:image/jpg;base64, ${base64}`;
        });
        return Promise.all(arrayOfBase64Strings);
      })
      .then(strings2 => {
        return setPhotos(strings2);
      });
  }
  ///////
  useEffect(() => {
    getPhotosFromS3();
  }, []);
  //////
  function switchToAllPhotoView() {
    setView("AllPhotos");
  }
  /////
  function switchToSinglePhotoView() {
    setView("SinglePhoto");
  }
  /////
  //------------------ vv gets rendered to the HTML page vv --------------------//
  if (view === "SinglePhoto") {
    return (
      <div>
        <Navbar />
        <SinglePhoto
          switchToAllPhotoView={switchToAllPhotoView}
          chosen={chosen}
        />
      </div>
    );
  } else if (view === "AllPhotos") {
    return (
      <div>
        <Navbar />
        <AllPhotos
          switchToSinglePhotoView={switchToSinglePhotoView}
          photos={photos}
          setChosen={setChosen}
        />
      </div>
    );
  }
}

// https://carlosiusalazar@github.com/CarlosIUSalazar/cc12-sprint.react.git
//https://makokusuda@github.com/makokusuda/cc12-sprint.react
