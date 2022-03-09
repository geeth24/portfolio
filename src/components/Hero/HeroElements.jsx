import styled from "styled-components";
import { motion } from "framer-motion";
export const HeroContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 30px; */
  height: 800px;
  position: sticky;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroBgImage = styled.img`
  background-color: #0000000;
  width: 50%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroBgVideo = styled.video`
  background-color: #0000000;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: left;
  text-shadow: 4px 4px 25px #000000;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled(motion.h4)`
  color: #00aeff;
  font-size: 32px;
  text-align: left;
  text-shadow: 4px 4px 25px #000000;
  width: 75%;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  width: 120px;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
