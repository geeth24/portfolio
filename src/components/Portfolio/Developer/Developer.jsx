import React from "react";
import DevCarousel from "./DevCarousel";

import styled from "styled-components";


const Developer = () => {
  return (
    <>
      {/* <DeveloperH1>Developer</DeveloperH1> */}

      <DeveloperContainer>
        <DeveloperWrapper>
          <DevCarousel />
        </DeveloperWrapper>
      </DeveloperContainer>
    </>
  );
};

export const DeveloperContainer = styled.div`
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010515;
`;

export const DeveloperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export default Developer;
