import { Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { IoMdBusiness } from "react-icons/io";
import { RiDashboard2Line } from "react-icons/ri";
import BackofficeNavItem from "./BackofficeNavItem";

type Props = {
  setBackoffice: React.Dispatch<React.SetStateAction<string>>;
  backoffice: string;
};

const BackofficeSidebar: React.FC<Props> = ({ setBackoffice, backoffice }) => {
  const theme = useTheme();
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  });

  return (
    <>
      <Flex
        minW={width * (15 / 100)}
        maxW="300px"
        minH="100vh"
        pt="5vh"
        bg="#fff"
      >
        <Flex flexDir="column" w="100%" gap="1rem">
          <Text px="2rem" fontFamily={theme.fonts.primary}>
            BACKOFFICE
          </Text>

          <BackofficeNavItem
            name="Dashboard"
            icon={RiDashboard2Line}
            path="/backoffice"
            setBackoffice={setBackoffice}
            backoffice={backoffice}
          />
          <BackofficeNavItem
            name="Users"
            icon={ImUsers}
            path="/users"
            setBackoffice={setBackoffice}
            backoffice={backoffice}
          />
          <BackofficeNavItem
            name="Customers"
            icon={IoMdBusiness}
            path="/customers"
            setBackoffice={setBackoffice}
            backoffice={backoffice}
          />
          <BackofficeNavItem
            name="Products"
            icon={BsCart4}
            path="/products"
            setBackoffice={setBackoffice}
            backoffice={backoffice}
          />
          <BackofficeNavItem
            name="Setting"
            icon={AiFillSetting}
            path="/settings"
            setBackoffice={setBackoffice}
            backoffice={backoffice}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default BackofficeSidebar;
