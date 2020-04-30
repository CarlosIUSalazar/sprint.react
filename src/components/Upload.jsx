import React, { useState } from "react";
import _ from "lodash";
import "../styles/button.css";
import { saveObject } from "../utils/index";

//const [selectedPhoto, setSelectedPhoto] = useState(null);

export default function Upload(props) {
  //upload function here ?
  //onlick event ?
  //saveObject(props.type)

  const onChange = e => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.log("img data ", e.target.result);
    };
    console.log("props.file", props.file);
    saveObject(props.file);
  };

  return (
    <>
      <input
        id="input"
        className="button upload"
        type="file"
        name="file"
        onChange={props.onChange}
      />
    </>
  );
}
