import React, { useEffect } from "react";

import {
  PhotographerCardP,
  PhotographerContainer,
  PhotographerDomContainer,
  PhotographerH1,
  PhotographerH12,
} from "./PhotographerElements";

import { ScaleFade, SlideFade, useDisclosure } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import PhotoAlbum from "react-photo-album";
import "./renderDiv.css";

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
import Seventeen from "../../../images/photographer/ReactShots 17-min.jpg";
import Eighteen from "../../../images/photographer/ReactShots 18-min.jpg";
import Nineteen from "../../../images/photographer/ReactShots 19-min.jpg";
import Twenty from "../../../images/photographer/ReactShots 20-min.jpg";
import TwentyOne from "../../../images/photographer/ReactShots 21-min.jpg";
import TwentyTwo from "../../../images/photographer/ReactShots 22-min.jpg";
import TwentyThree from "../../../images/photographer/ReactShots 23-min.jpg";
import TwentyFour from "../../../images/photographer/ReactShots 24-min.jpg";
import TwentyFive from "../../../images/photographer/ReactShots 25-min.jpg";

import styled from "styled-components";

export const renderDiv = styled.div``;

const renderPhoto: RenderPhoto = (
  {
  layout,
  layoutOptions,
  imageProps: { alt, style, ...restImageProps },
  
  
}) => (
  <SlideFade initial={0.5} in={true}>
    <renderDiv className="render-div">
      <img
        alt={alt}
        style={{ ...style, width: "100%", padding: 0, transition: "all 1s" }}
        {...restImageProps}
      />
      <div className="render-div-overlay">
        <div className="render-div-overlay-text">
          <h1>{restImageProps.Eight}</h1>
        </div>
      </div>
    </renderDiv>
  </SlideFade>
);

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
  {
    src: Seventeen,
    width: 125,
    height: 175,
  },
  {
    src: Eighteen,
    width: 175,
    height: 125,
  },
  {
    src: Nineteen,
    width: 175,
    height: 125,
  },
  {
    src: Twenty,
    width: 175,
    height: 125,
  },
  {
    src: TwentyOne,
    width: 175,
    height: 125,
  },
  {
    src: TwentyTwo,
    width: 175,
    height: 125,
  },
  {
    src: TwentyThree,
    width: 175,
    height: 125,
  },
  {
    src: TwentyFour,
    width: 175,
    height: 125,
  },
  {
    src: TwentyFive,
    width: 175,
    height: 125,
  },
];

const Photographer = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !isOpen) {
      onToggle();
    }
  });
  return (
    <>
      <PhotographerContainer ref={ref}>
        <PhotographerH1>Photographer</PhotographerH1>
        <PhotographerCardP>Reactive Shots</PhotographerCardP>
        <SlideFade initial={0.5} in={isOpen}>
          <PhotoAlbum
            layout="masonry"
            photos={images}
            renderPhoto={renderPhoto}
          />
        </SlideFade>
      </PhotographerContainer>
    </>
  );
};

export const PhotographerDom = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !isOpen) {
      onToggle();
    }
  });
  return (
    <>
      <PhotographerDomContainer ref={ref}>
        <PhotographerH12>Reactive Shots</PhotographerH12>
        <SlideFade initial={0.5} in={isOpen}>
          <PhotoAlbum
            layout="masonry"
            photos={images}
            renderPhoto={renderPhoto}
          />
        </SlideFade>
      </PhotographerDomContainer>
    </>
  );
};

export default Photographer;
