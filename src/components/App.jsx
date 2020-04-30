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
  const [photos, setPhotos] = useState(null);
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

  // useEffect(() => {
  //   const currentStateOfphotos = [...photos];
  //   currentStateOfphotos.push(selectedPhoto)
  //   setPhotos(currentStateOfphotos);
  //   console.log(selectedPhoto, currentStateOfphotos);
  // }, [selectedPhoto]);

  const displayPhoto = () => {
    const tenPhotos = [];
    for (let i = 0; i < 12; i++) {
      tenPhotos.push(photos[i]);
    }
    return tenPhotos.map((value, index) => {
      return <img src={value} height="100" width="200" alt="🙈🙉🙊"></img>;
    });
  };

  // function that is being passed to a child as a 'prop' for it to call (event?)
  const updatePageType = () => {
    console.log("-------->Hello------>"); // <-- not logging
    setCurrentView("AllPhotos");
  };

  //------------------ vv gets rendered to the HTML page vv --------------------//
  return (
    <div className="app">
      <h1> *** Its RENDERING - YAY! ***</h1>{" "}
      {/* TO BE REMOVED - DEBUGGING ONLY */}
      <p>----------------- ^^^ debug area ^^^ ------------------</p>{" "}
      <NavBar props={updatePageType} />{" "}
      {/*onChange={
        e => {setSelectedPhoto(e.target.files[0])}}}*/}
      <div className="photo container">
        {currentView === "SinglePhoto" ? <SinglePhoto /> : <AllPhotos />}
        {/*<div>{displayPhoto()}</div> {/*<--- need to display in single
              or all photo .jsx */}
      </div>
    </div>
  );
}

//------------------------- vv Notes and Junk vv -------------------------------//

// have a final then that sets the image, then have a useEffect that triggers
// that function every time a state changes, (tell the code to run the promise chain)
// then set the state, which will trigger the DOM to refresh, because

//promise chiain inside the useeffect, at the end of the chain set photos -> change of state
// which should render (only firing the effect once)

//console.log("KEEYY!???!", photoKey); //undef
//let oneMoreArray = []; // <-- more promises ** run away!! **
//oneMoreArray.push(getPhotos()); // <-- STUPID promise!!!
//let oneMoreArrayCopy = oneMoreArray.slice(); // <-- failed to seperate the promise
//console.log("App -> oneMoreArrayCopy", oneMoreArrayCopy);
//^^ Log this and you'll get promises!!! ^^

// // useEffect call to get photos (only once), (when the state changed?)
// useEffect(() => {
//   //called when state is updated (Which state? currentview/photo/selectedphoto?)
//   getPhotos();
// }, []); /* <---- empty [] so it's only called once */

// const getArr = (data) => {photoKey.push(data);}// return photoKey[0];}
// const arr = await getArr(data);
//return `data:image/jpg;base64,${arr}`;
//return photoKey.push(`data:image/jpg;base64,${arr}`)
//return photoKey
//image3.src = `data:image/jpg;base64,${arr}`;
//document.body.appendChild(image3);

// //let imagesArray = [];
// let photoKey = [];
// async function getPhotos() {
//   let image3 = new Image();
//   const photos = await listObjects();
//   const data = await getSingleObject(photos[0].Key); //TODO set this to state
//   setPhotos(data);
// }

// let newArray = []
//   list().then(() => {newArray.push(photoKey[0])})
//   console.log("RESUUUSL", newArray[0])
//   let image2 = new Image();
//   //image2.src ="data:image/png;base64,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";
//   image2.src = list();
//   document.body.appendChild(image2);

//   const selectedPhoto = []; // an image represented as a base-64 string

//   function Testing({listPhotos}){
//     return (
//       <img src={listPhotos}/>
//     );
//   }

/*
    function getPhotos() {
      let result = [];
      return (promise listObjects()
      .then(listOfPromiseObjs => listOfPromiseObjs.map(el => el.Key)
      .then(arrayOfPromises => Promise.all(arrayOfPromises.map(item => getSingleObject(item)));
      .then(arrayOfBase64Strings => result.push(arrayOfBase64Strings.map(el => "data:image/jpg;base64," + el));
      setPhotos(result));
    }
  */
