import { Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
type Props = {
  path: string;
  name: string;
  handleClick?: () => void;
  mobileMenu?: boolean;
};

const NavLink: React.FC<Props> = ({ path, name, handleClick, mobileMenu }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <Text
        textAlign="center"
        cursor="pointer"
        onClick={() => {
          router.push(path);
          mobileMenu && handleClick?.();
        }}
        color={path === router.pathname ? theme.colors.primary : "#202020"}
        fontFamily={theme.fonts.primary}
      >
        {name}
      </Text>
    </>
  );
};

export default NavLink;
