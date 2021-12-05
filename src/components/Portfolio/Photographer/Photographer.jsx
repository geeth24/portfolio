import React from "react";

import { PhotographerContainer } from "./PhotographerElements";

import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

import One from "../../../images/photographer/1.jpg";
import Two from "../../../images/photographer/2.JPG";
import Three from "../../../images/photographer/3.jpg";
import Four from "../../../images/photographer/4.jpg";
import Five from "../../../images/photographer/5.jpg";
import Six from "../../../images/photographer/6.jpg";
import Seven from "../../../images/photographer/7.jpg";
import Eight from "../../../images/photographer/8.jpg";
import Nine from "../../../images/photographer/9.jpeg";
import Ten from "../../../images/photographer/10.jpg";
import Eleven from "../../../images/photographer/11.jpg";
import Twelve from "../../../images/photographer/12.JPG";
import Thirteen from "../../../images/photographer/13.jpg";
import Fourteen from "../../../images/photographer/14.JPG";
import Fifteen from "../../../images/photographer/15.JPG";

const images = [
  {
    original: One,
    thumbnail: One,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Two,
    thumbnail: Two,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Three,
    thumbnail: Three,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Four,
    thumbnail: Four,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Five,
    thumbnail: Five,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Six,
    thumbnail: Six,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Seven,
    thumbnail: Seven,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Eight,
    thumbnail: Eight,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Nine,
    thumbnail: Nine,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Ten,
    thumbnail: Ten,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Eleven,
    thumbnail: Eleven,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Twelve,
    thumbnail: Twelve,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Thirteen,
    thumbnail: Thirteen,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Fourteen,
    thumbnail: Fourteen,
    originalHeight: 40,
    originalWidth: 40,
  },
  {
    original: Fifteen,
    thumbnail: Fifteen,
    originalHeight: 40,
    originalWidth: 40,
  },
];

const Photographer = () => {
  return (
    <>
      {/* <PhotographerH1>Photographer</PhotographerH1> */}
      <PhotographerContainer>
        <ImageGallery items={images} />
      </PhotographerContainer>
    </>
  );
};

export default Photographer;
