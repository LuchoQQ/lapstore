import { Box, Flex, Grid, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";

const HomePage: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Grid w="100%" h="100vh" bg="#9fbded">
        <Flex
          w="100%"
          mt="auto"
          mb="auto"
          justifyContent="center"
          position="relative"
          zIndex="100"
          px="5rem"
          flexDir="column"
        >
          <Grid mr="auto" alignSelf="center" justifyItems="center">
            <Text
              fontSize="5xl"
              fontFamily={theme.fonts.tertiary}
              color="#202020"
              letterSpacing=".2rem"
            >
              Laptop
            </Text>
            <Text
              fontSize="5xl"
              fontFamily={theme.fonts.tertiary}
              color="#202020"
              letterSpacing=".2rem"
            >
              Commerce
            </Text>
            <Text
              fontSize="sm"
              fontFamily={theme.fonts.primary}
              color="#202020"
              w="300px"
            >
              Nulla duis eiusmod dolore eiusmod esse.Ad nisi sint non
              consectetur reprehenderit quis.
            </Text>
            <Flex
              px="1rem"
              py="1rem"
              bg={theme.colors.primary}
              w="150px"
              mt="1rem"
              borderRadius="100px"
              justifyContent="center"
              alignContent="center"
              cursor="pointer"
              boxShadow="0px 15px 40px 10px rgba(243,52,100,0.4)"
            >
              <Text fontFamily={theme.fonts.primary} color="#fff">
                Ir a Tienda!
              </Text>
            </Flex>
          </Grid>
          <Image
            src="https://res.cloudinary.com/diylksocz/image/upload/v1665768546/57671_uu8wca_019609-removebg-preview_cuhxef_1_lek1xt.png"
            position="relative"
            zIndex={50}
            w="450px"
            top="100px"
            ml="auto"
          />
        </Flex>
        <Flex position="absolute" w="100%" h="100vh" zIndex={20} top="0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{
              marginTop: "auto",
              position: "relative",
              alignSelf: "flex-end",
              width: "100%",
            }}
          >
            <path
              fill="#f3f4f5"
              fill-opacity="1"
              d="M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,202.7C672,192,768,160,864,165.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Flex>
      </Grid>
    </>
  );
};

export default HomePage;
