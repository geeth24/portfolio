import React from "react";
import {
  chakra,
  Box,
  Image,
  useColorModeValue,
  Link,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";

const DevCard = ({ id, title, description, client, date, image, link }) => {
  return (
    <Box mx="auto" bg="#00aeff" w="full" h="full" padding={10} p={5}>
      <Image
        roundedTop="lg"
        rounded="full"
        h="200px"
        fit="contain"
        src={image}
        alt="Img"
        boxShadow="0px 0px 10px #000"
      />

      <Box p={6}>
        <Box>
          <chakra.span
            fontSize="s"
            textTransform="uppercase"
            color={useColorModeValue("brand.600", "brand.400")}
            textShadow="0px 0px 10px #000"
          >
            Client: {client}
          </chakra.span>
          <Text
            display="block"
            color="#fff"
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ color: "#fff", textDecor: "underline" }}
            href={link}
            textShadow="0px 0px 10px #000"
          >
            {title}
          </Text>
          <chakra.p
            mt={2}
            fontSize="md"
            color="#fff"
            textShadow="0px 0px 10px #000"
          >
            {description}
          </chakra.p>
          <VStack p={5}>
            <chakra.span
              mx={1}
              fontSize="sm"
              color="#fff"
              textShadow="0px 0px 10px #000"
            >
              {date}
            </chakra.span>
            <chakra.span>
              <Link
                color="#fff"
                fontWeight="bold"
                fontSize="md"
                mt={2}
                _hover={{ color: "#010515", textDecor: "underline" }}
                href={link}
                textShadow="0px 0px 10px #000"
              >
                <Button
                  color="#00aeff"
                  bg="#010515"
                  _hover={{ bg: "#008dce", color: "#010515" }}
                >
                  Learn more
                </Button>
              </Link>
            </chakra.span>
          </VStack>
        </Box>

      </Box>
    </Box>
  );
};

export default DevCard;
