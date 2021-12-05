import React from "react";

import {
  ProducerContainer,
  ProducerWrapper,
  ProducerCards,
  ProducerCard,
  ProducerIcon,
  ProducerCardH1,
  ProducerCardP,
} from "./ProducerElements";

import BurningBridges from "../../../images/burningbridges.jpg";
import Boyfriend from "../../../images/boyfriend.jpg";
import Lights from "../../../images/lights.jpg";


const Producer = () => {
  return (
    <>
      {/* <ProducerH1>Producer</ProducerH1> */}
      <ProducerContainer>
        <ProducerWrapper>
          <ProducerCards>
            <ProducerCard>
              <ProducerIcon src={BurningBridges} />
              <ProducerCardH1>Burning Bridges</ProducerCardH1>
              <ProducerCardP>
                Produced by me and featuring ZNO and Itihas.
              </ProducerCardP>
            </ProducerCard>
            <ProducerCard>
              <ProducerIcon src={Boyfriend} />
              <ProducerCardH1>Boyfriend</ProducerCardH1>
              <ProducerCardP>
                Produced by me and featuring Itihas.
              </ProducerCardP>
            </ProducerCard>
            <ProducerCard>
              <ProducerIcon src={Lights} />
              <ProducerCardH1>Lights</ProducerCardH1>
              <ProducerCardP>
                Produced by me and featuring MRAV.
              </ProducerCardP>
            </ProducerCard>
          </ProducerCards>
        </ProducerWrapper>
      </ProducerContainer>
    </>
  );
};

export default Producer;
