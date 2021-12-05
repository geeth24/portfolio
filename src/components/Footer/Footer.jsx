import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {

    const toggleHome = () => {
      scroll.scrollToTop();
    };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="/"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggleHome}
            >
              Geeth
            </SocialLogo>
            <WebsiteRights>
              Geeth Gunnampalli © {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
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
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
