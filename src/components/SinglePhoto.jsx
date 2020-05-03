import React from "react";

export default function SinglePhoto(props) {
  return (
    <div>
      <img
        className="singleImage"
        src={props.chosen}
        onClick={() => {
          props.switchToAllPhotoView();
        }}
        width="600"
        height="400"
      />
    </div>
  );
}
