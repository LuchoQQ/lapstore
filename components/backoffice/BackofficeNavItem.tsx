import { Flex, Icon, Text, useTheme } from "@chakra-ui/react";
import { ThemeContext } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
  name: string;
  path: string;
  icon: IconType;
  setBackoffice: React.Dispatch<React.SetStateAction<string>>;
  backoffice: string;
};

const BackofficeNavItem: React.FC<Props> = ({
  icon,
  name,
  path,
  setBackoffice,
  backoffice,
}) => {
  const theme = useTheme();

  return (
    <>
      <Flex
      cursor='pointer'
        alignItems="center"
        px="2rem"
        gap="1rem"
        position='relative'
        onClick={() => setBackoffice(path)}
        _before={{
          content: "''",
          position: "absolute",
          height: "100%",
          bottom: "0",
          left: "0",
          width: "5px",
          bg: backoffice === path ? theme.colors.primary : "transparent",

        }}

      >
        <Icon as={icon} fontSize="2xl" />
        <Text fontFamily={theme.fonts.primary} fontSize="sm" color={backoffice === path ? theme.colors.primary : '#000'}>
          {name}
        </Text>
      </Flex>
    </>
  );
};

export default BackofficeNavItem;
