import React, { useState } from "react";
import { Box, Flex, Text, HStack } from "@chakra-ui/react";

import { projects } from "./Projects";
import DevCard from "./DevCard";

const DevCarousel = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    textShadow: "0px 0px 10px #000",
    _hover: {
      opacity: 0.8,
      bg: "#010515",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = projects.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const DevCarouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex overflow="hidden" pos="relative" rounded={10}>
      <Flex h="full" w="full" {...DevCarouselStyle}>
        {projects.map((slide, sid) => (
          <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
            <Text
              color="white"
              fontSize="xs"
              p="8px 12px"
              pos="absolute"
              top="0"
              textShadow="0px 0px 10px #000"
            >
              {sid + 1} / {slidesCount}
            </Text>
            <DevCard
              key={slide.id}
              title={slide.title}
              description={slide.description}
              client={slide.client}
              date={slide.date}
              image={slide.image}
              link={slide.link}
            />
          </Box>
        ))}
      </Flex>
      <Text {...arrowStyles} left="0" onClick={prevSlide}>
        &#10094;
      </Text>
      <Text {...arrowStyles} right="0" onClick={nextSlide}>
        &#10095;
      </Text>
      <HStack justify="center" pos="absolute" bottom="8px" w="full">
        {Array.from({ length: slidesCount }).map((_, slide) => (
          <Box
            key={`dots-${slide}`}
            cursor="pointer"
            boxSize={currentSlide === slide ? "10px" : "7px"}
            m="0 2px"
            bg={currentSlide === slide ? "#fff" : "#010515"}
            rounded="50%"
            display="inline-block"
            transition="background-color 0.6s ease"
            _hover={{ bg: "blackAlpha.800" }}
            onClick={() => setSlide(slide)}
          ></Box>
        ))}
      </HStack>
    </Flex>
  );
};

export default DevCarousel;
