import React from "react";
import styled from "styled-components";
import ProdCarousel from "./ProdCarousel";

const Producer = () => {
  return (
    <>
      {/* <ProducerH1>Producer</ProducerH1> */}
      <ProducerContainer>
        <ProducerWrapper>
          <ProdCarousel />
        </ProducerWrapper>
      </ProducerContainer>
    </>
  );
};

export const ProducerContainer = styled.div`
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010515;
`;

export const ProducerWrapper = styled.div`
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

export default Producer;
