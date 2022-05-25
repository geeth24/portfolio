import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  TextContent,
  SocialIcons,
  SocialIconLink,
} from "./HeroElements";
import Particles from "react-tsparticles";
import options from "./particles";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <Particles options={options} />

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
              href="https://www.instagram.com/geethsg7/?hl=en"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </TextContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
