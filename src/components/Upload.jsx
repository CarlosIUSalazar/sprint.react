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
    <div id="upload_button">
      <label>
        <input
          type="file"
          ngf-select="true"
          ng-model="new_files"
          ng-change="fs.uploadFiles(new_files)"
          multiple
        />
        <span className="button upload" onChange={props.onChange}>
          Upload
        </span>
      </label>
    </div>
  );
}
