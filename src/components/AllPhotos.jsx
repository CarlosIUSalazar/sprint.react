import React from "react";
import _ from "lodash";

export default function AllPhotos(props) {
  const strings = props.photos;
  return (
    <>
      {strings.map((string, index) => (
        <img
          key={index}
          src={string}
          width="300"
          height="200"
          onClick={() => {
            props.setChosen(string);
            props.switchToSinglePhotoView();
          }}
        ></img>
      ))}
    </>
  );
}

// //const imgArray = ['https://i.picsum.photos/id/476/536/354.jpg','https://i.picsum.photos/id/794/536/354.jpg','https://i.picsum.photos/id/569/536/354.jpg','https://i.picsum.photos/id/726/536/354.jpg','https://i.picsum.photos/id/125/536/354.jpg','https://i.picsum.photos/id/187/536/354.jpg','https://i.picsum.photos/id/508/536/354.jpg','https://i.picsum.photos/id/391/536/354.jpg','https://i.picsum.photos/id/229/536/354.jpg','https://i.picsum.photos/id/1055/536/354.jpg','https://i.picsum.photos/id/340/536/354.jpg','https://i.picsum.photos/id/596/536/354.jpg']
// //const imgArrayS3 = []
// <div>
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[0])}}src={imgArray[0]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[1])}}src={imgArray[1]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[2])}}src={imgArray[2]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[3])}}src={imgArray[3]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[4])}}src={imgArray[4]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[5])}}src={imgArray[5]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[6])}}src={imgArray[6]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[7])}}src={imgArray[7]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[8])}}src={imgArray[8]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[9])}}src={imgArray[9]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[10])}}src={imgArray[10]} height="300" width="400" />
//   <img onClick={() => {props.switchToSinglePhotoView(); props.setSelectedPhoto(imgArray[11])}}src={imgArray[11]} height="300" width="400" />
//   </div>
