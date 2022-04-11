import React from "react";

import {
  PhotographerCardP,
  PhotographerContainer,
  PhotographerH1,
} from "./PhotographerElements";

import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import PhotoAlbum from "react-photo-album";

import One from "../../../images/photographer/ReactShots 1.jpg";
import Two from "../../../images/photographer/ReactShots 2.jpg";
import Three from "../../../images/photographer/ReactShots 3.jpg";
import Four from "../../../images/photographer/ReactShots 4.jpg";
import Five from "../../../images/photographer/ReactShots 5.jpg";
import Six from "../../../images/photographer/ReactShots 6.jpg";
import Seven from "../../../images/photographer/ReactShots 7.jpg";
import Eight from "../../../images/photographer/ReactShots 8.jpg";
import Nine from "../../../images/photographer/ReactShots 9.jpg";
import Ten from "../../../images/photographer/ReactShots 10.jpg";
import Eleven from "../../../images/photographer/ReactShots 11.jpg";
import Twelve from "../../../images/photographer/ReactShots 12.jpg";
import Thirteen from "../../../images/photographer/ReactShots 13.jpg";
import Fourteen from "../../../images/photographer/ReactShots 14.jpg";
import Fifteen from "../../../images/photographer/ReactShots 15.jpg";
import Sixteen from "../../../images/photographer/ReactShots 16.jpg";

const images = [
  {
    src: One,
    width: 175,
    height: 125,
  },
  {
    src: Two,
    width: 175,
    height: 125,
  },
  {
    src: Three,
    width: 175,
    height: 125,
  },
  {
    src: Four,
    width: 175,
    height: 125,
  },
  {
    src: Five,
    width: 175,
    height: 125,
  },
  {
    src: Six,
    width: 175,
    height: 125,
  },
  {
    src: Seven,
    width: 175,
    height: 125,
  },
  {
    src: Eight,
    width: 175,
    height: 125,
  },
  {
    src: Nine,
    width: 125,
    height: 175,
  },
  {
    src: Ten,
    width: 125,
    height: 175,
  },
  {
    src: Eleven,
    width: 125,
    height: 175,
  },
  {
    src: Twelve,
    width: 175,
    height: 125,
  },
  {
    src: Thirteen,
    width: 125,
    height: 175,
  },
  {
    src: Fourteen,
    width: 175,
    height: 125,
  },
  {
    src: Fifteen,
    width: 125,
    height: 175,
  },
  {
    src: Sixteen,
    width: 175,
    height: 125,
  },
];





const Photographer = () => {
  return (
    <>
      <PhotographerContainer>
        <PhotographerH1>Photographer</PhotographerH1>
        <PhotographerCardP>Reactive Shots</PhotographerCardP>
        <PhotoAlbum layout="masonry" photos={images} />
      </PhotographerContainer>
    </>
  );
};

export default Photographer;
