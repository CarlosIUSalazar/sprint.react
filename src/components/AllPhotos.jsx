import React from "react";
import _ from "lodash";

export default function AllPhotos({ displayPhotos }) {
  return (
    <div id="allPhotos" className="allPhotos container">
      <div>{displayPhotos()}</div>
    </div>
  );
}
