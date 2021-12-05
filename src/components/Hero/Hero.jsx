import React from "react";
import Image from "../../images/GeethC.png";
import Video from "../../videos/video.mp4";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion/dist/es/index";

import {
  HeroContainer,
  HeroBg,
  HeroBgImage,
  HeroBgVideo,
  HeroContent,
  HeroH1,
  HeroH2,
  TextContent,
  SocialIcons,
  SocialIconLink,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroBgVideo
        autoPlay
        loop
        muted
        playsInline
        src={Video}
        type="video/mp4"
      />
      <HeroContent>
        <TextContent>
          <HeroH1>Hi, I'm</HeroH1>
          <HeroH1>Geeth Gunnampalli.</HeroH1>
          <HeroH2
            animate={{ x: 25 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Developer.
          </HeroH2>
          <HeroH2
            animate={{ x: 50 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Producer.
          </HeroH2>
          <HeroH2
            animate={{ x: 75 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Photographer.
          </HeroH2>
          <SocialIcons
            as={motion.h1}
            animate={{ x: 125 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <SocialIconLink
              href="https://github.com/thetechie7"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/geethgunnampalli/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/thetechie.official/?hl=en"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </TextContent>
        <HeroBgImage src={Image} type="image/jpg" />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
