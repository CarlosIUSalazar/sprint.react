import React, { useState } from "react";
import _ from "lodash";
import "../styles/button.css";
import { saveObject } from "../utils/index";

//const [selectedPhoto, setSelectedPhoto] = useState(null);

export default function Upload({ uploadPhoto }) {
  //upload function here ?
  //onlick event ?
  //saveObject(props.type)

  // const onChange = e => {
  //   let files = e.target.files;
  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);

  //   reader.onload = e => {
  //     console.log("img data ", e.target.result);
  //   };
  //   console.log("props.file", props.file);
  //   saveObject(props.file);
  //   alert("Upload complete");
  // };

  return (
    <div id="upload_button">
      <label>
        <input
          type="file"
          ngf-select="true"
          ng-model="new_files"
          ng-change="fs.uploadFiles(new_files)"
          accept="image/gif, image/jpeg, image/png"
          multiple
          onChange={uploadPhoto}
        />
        <span className="button upload">Upload</span>
      </label>
    </div>
  );
}
