import { Button, Flex, Text, useTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";



const ComponentName: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <Flex
        w="100%"
        fontFamily={theme.fonts.primary}
        fontSize="1xl"
        justifyContent="flex-end"
        bg="#202020"
        color="#dedede"
      >
        <Text mr="auto" ml="2rem">
          LAPSTORE
        </Text>
        <Flex gap="1rem" mr="2rem">
          <Text onClick={() => router.push('/')}>INICIO</Text>
          <Text onClick={() => router.push('shop')}>SHOP</Text>
          <Text>ABOUT</Text>
          <Text>OFERTAS</Text>
        </Flex>
        <Flex gap="1rem">
          <Button>Nose</Button>
          <Button>Nose</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ComponentName;
