import { Button, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import laptop from "../../public/laptop.png";
type MapProps = {
  name: string;
  path: string;
};

const ComponentName: React.FC = () => {
  const links = {
    Inicio: "/",
    Shop: "/shop",
    About: "/about",
    Contact: "/contact",
  };

  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <Flex
        //#9fbded
        w="100%"
        fontFamily={theme.fonts.primary}
        fontSize="1xl"
        color="#202020"
        bg="#9fbded"
        px="5rem"
        py='1.5rem'
        position="fixed"
        justifyContent='center'
        zIndex={1000}
      >
        <Text>LAPTECH</Text>
        <Flex gap="1rem" alignSelf="center" ml='auto'>
          {Object.entries(links).map((props, index) => {
            return (
              <>
                <Text
                  cursor="pointer"
                  onClick={() => router.push(props[1])}
                  color="#323131"
                  fontFamily={theme.fonts.primary}
                >
                  {props[0]}
                </Text>
              </>
            );
          })}
        </Flex>
        <Flex
          gap="1rem"
          alignSelf="center"
          px="1rem"
          py="0.5rem"
          borderRadius='100px'
          border={`1px solid ${theme.colors.primary}`}
          transition='all .2s ease'
          role='group'
          ml='auto'
          _hover={{
            bg: theme.colors.primary
          }}
          
        >
          <Text color='#202020' _groupHover={{ color: '#fff'}}>Contact us</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default ComponentName;
