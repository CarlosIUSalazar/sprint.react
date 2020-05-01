import React from "react";

export default function SinglePhoto({ singleImage }) {
  console.log("SinglePhoto", singleImage);
  return (
    <img
      className={"singlePhoto"}
      src={singleImage}
      id="singlePhoto"
      alt="🤯🤯🤯"
    ></img>
  );
}
