import React from "react";

import {
  PhotographerCardP,
  PhotographerContainer,
  PhotographerDomContainer,
  PhotographerH1,
  PhotographerH12,
} from "./PhotographerElements";

import PhotoAlbum from "react-photo-album";

import One from "../../../images/photographer/ReactShots 1-min.jpg";
import Two from "../../../images/photographer/ReactShots 2-min.jpg";
import Three from "../../../images/photographer/ReactShots 3-min.jpg";
import Four from "../../../images/photographer/ReactShots 4-min.jpg";
import Five from "../../../images/photographer/ReactShots 5-min.jpg";
import Six from "../../../images/photographer/ReactShots 6-min.jpg";
import Seven from "../../../images/photographer/ReactShots 7-min.jpg";
import Eight from "../../../images/photographer/ReactShots 8-min.jpg";
import Nine from "../../../images/photographer/ReactShots 9-min.jpg";
import Ten from "../../../images/photographer/ReactShots 10-min.jpg";
import Eleven from "../../../images/photographer/ReactShots 11-min.jpg";
import Twelve from "../../../images/photographer/ReactShots 12-min.jpg";
import Thirteen from "../../../images/photographer/ReactShots 13-min.jpg";
import Fourteen from "../../../images/photographer/ReactShots 14-min.jpg";
import Fifteen from "../../../images/photographer/ReactShots 15-min.jpg";
import Sixteen from "../../../images/photographer/ReactShots 16-min.jpg";

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

export const PhotographerDom = () => {
  return (
    <>
      <PhotographerDomContainer>
        <PhotographerH12>Reactive Shots</PhotographerH12>
        <PhotoAlbum layout="masonry" photos={images} />
      </PhotographerDomContainer>
    </>
  );
};

export default Photographer;
