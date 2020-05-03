import { saveObject } from "../utils/index.js";
import React, { useRef } from "react";
import _ from "lodash";
import "../styles/upload.css";

export default function Upload() {
  let uploadPhoto = useRef();
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          uploadPhoto.current.click();
        }}
      >
        Upload
        <input
          ref={uploadPhoto}
          type="file"
          accept="image/gif, image/jpeg, image/png"
          onChange={e => {
            saveObject(e.target.files[0]);
            alert("Image Uploaded Successfully");
          }}
        ></input>
      </button>
    </div>
  );
}
