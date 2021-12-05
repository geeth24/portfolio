import styled from "styled-components";

export const PhotographerContainer = styled.div`
  color: white;
  align-items: center;
  background-color: #010515;



 
`;

export const PhotographerH1 = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-right: 24px;
  margin-left: 24px;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
`;

export const PhotographerWrapper = styled.div`
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

export const PhotographerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PhotographerCard = styled.div`
  background: #00aeff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border-color: #010515;
  max-height: 360px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const PhotographerCardH1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const PhotographerCardP = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const PhotographerIcon = styled.img`
  width: 100px !important;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
`;
