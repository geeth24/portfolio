import React, { useEffect } from "react";
import Developer from "./Developer/Developer";
import { PortfolioContainer } from "./PortfolioElement";



import Producer from "./Producer/Producer";
import Photographer from "./Photographer/Photographer";

import {
  useDisclosure,
  ScaleFade,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,

} from "@chakra-ui/react";

import {useInView} from "react-intersection-observer";



const Portfolio = () => {

   const { isOpen, onToggle } = useDisclosure();

   const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !isOpen) {
      onToggle();
    }
  },);
  return (
    <>
      <PortfolioContainer id="portfolio">
        <Tabs align="center" variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab ref={ref}>Developer</Tab>
            <Tab ref={ref} >Producer </Tab>
            <Tab ref={ref}>Photographer</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ScaleFade initialScale={0.5} in={isOpen}>
                <Developer />
              </ScaleFade>
            </TabPanel>
            <TabPanel>
              <ScaleFade initialScale={0.5} in={isOpen}>
                <Producer />
              </ScaleFade>
            </TabPanel>
            <TabPanel>
              <ScaleFade initialScale={0.9} in={isOpen}>
                <Photographer />
              </ScaleFade>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
