import React from "react";

import {
  DeveloperContainer,
  DeveloperWrapper,
  DeveloperCards,
  DeveloperCard,
  DeveloperIcon,
  DeveloperCardH1,
  DeveloperCardP,
} from "./DeveloperElements";

import MyPanchang from "../../../images/mypanchang.png";
import WorkTracker from "../../../images/worktracker.png";
import RadSoftInc from "../../../images/radsoftinc.png";
import CoppellForYouth from "../../../images/coppellforyouth.png";

const Developer = () => {
  return (
    <>
      {/* <DeveloperH1>Developer</DeveloperH1> */}

      <DeveloperContainer>
        <DeveloperWrapper>
          <DeveloperCards>
            <DeveloperCard>
              <DeveloperIcon src={MyPanchang} />
              <DeveloperCardH1>MyPanchang</DeveloperCardH1>
              <DeveloperCardP>
                Built a responsive lunar calendar iOS app called "MyPanchang"
                using Swift to view the three elements things in the Hindu
                calendar.
              </DeveloperCardP>
            </DeveloperCard>
            <DeveloperCard>
              <DeveloperIcon src={WorkTracker} />
              <DeveloperCardH1>Work Tracker</DeveloperCardH1>
              <DeveloperCardP>
                Built a responsive work tracker iPadOS app called "Student Work
                Tracker" using Swift that allows teachers in tutoring services
                to track whether their students picked up
              </DeveloperCardP>
            </DeveloperCard>
            <DeveloperCard>
              <DeveloperIcon src={RadSoftInc} />
              <DeveloperCardH1>Rad Soft, Inc.'s Website</DeveloperCardH1>
              <DeveloperCardP>
                Developed a website for the company using HTML, CSS, and
                JavaScript.
              </DeveloperCardP>
            </DeveloperCard>
            <DeveloperCard>
              <DeveloperIcon src={CoppellForYouth} />
              <DeveloperCardH1>Coppell For Youth</DeveloperCardH1>
              <DeveloperCardP>
                Developed a response web app using JavaScript, HTML/CSS to
                display the work done by Coppell For Youth
              </DeveloperCardP>
            </DeveloperCard>
          </DeveloperCards>
        </DeveloperWrapper>
      </DeveloperContainer>
    </>
  );
};

export default Developer;
