import {
  Button,
  Flex,
  Image,
  Text,
  useTheme,
  Icon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Divider,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/reducers/cartSlice";
import CartDrawer from "./CartDrawer";
import NavLink from "./NavLink";
type MapProps = {
  name: string;
  path: string;
};

const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const links = {
    Inicio: "/",
    Shop: "/shop",
    About: "/about",
    Contact: "/contact",
    Backoffice: "/backoffice",
  };

  const theme = useTheme();
  const router = useRouter();
  const cart = useSelector(selectCart);

  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <>
      <CartDrawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <Flex
        w="100%"
        fontFamily={theme.fonts.primary}
        fontSize="1xl"
        color="#202020"
        bg="#fff"
        px="5rem"
        py="1rem"
        boxShadow="0px 0px 5px 5px rgba(0,0,0,0.1)"
        position="fixed"
        justifyContent="center"
        zIndex={1000}
      >
        <Flex
          gap="1rem"
          alignSelf="center"
          ml="auto"
          display={["none", "none", "flex", "flex", "flex"]}
        >
          {Object.entries(links).map((props, index) => {
            return <NavLink path={props[1]} name={props[0]} key={index} />;
          })}
        </Flex>
        <Flex
          ml="auto"
          gap="2rem"
          display={["none", "none", "flex", "flex", "flex"]}
        >
          <Flex>
            <Icon
              as={AiOutlineShoppingCart}
              alignSelf="center"
              fontSize="2xl"
              onClick={() => setDrawerOpen(true)}
              position="relative"
            />
            {cart.length > 0 && (
              <Text
                bg={theme.colors.primary}
                color="#fff"
                borderRadius="50%"
                w="1.5rem"
                h="1.5rem"
                fontSize="xs"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {totalItems}
              </Text>
            )}
          </Flex>
          <Flex
            gap="1rem"
            alignSelf="center"
            px="1rem"
            py="0.5rem"
            borderRadius="100px"
            border={`1px solid ${theme.colors.primary}`}
            transition="all .2s ease"
            role="group"
            ml="auto"
            _hover={{
              bg: theme.colors.primary,
            }}
          >
            <Text color="#202020" _groupHover={{ color: "#fff" }}>
              Contact us
            </Text>
          </Flex>
        </Flex>

        {/* MOBILE */}
        <Icon
          as={FaBars}
          onClick={() => setMobileMenu(!mobileMenu)}
          position="relative"
          display={["block", "block", "none", "none", "none"]}
        />
        <Flex
          w="100vw"
          h="100vh"
          position="fixed"
          bg="#f3f4f5"
          transition="all 0.4s ease"
          top={mobileMenu === true ? "2.9rem" : "-100vh"}
          justifyContent="center"
        >
          <Flex flexDir="column" h="90vh" justifyContent="center" gap="3rem">
            {Object.entries(links).map((props, index) => {
              return (
                <NavLink
                  path={props[1]}
                  name={props[0]}
                  key={index}
                  handleClick={() => setMobileMenu(false)}
                  mobileMenu={mobileMenu}
                />
              );
            })}
            <Flex alignSelf="center">
              <Icon
                as={AiOutlineShoppingCart}
                alignSelf="center"
                fontSize="2xl"
                onClick={() => setDrawerOpen(true)}
                position="relative"
              />
              {cart.length > 0 && (
                <Text
                  bg={theme.colors.primary}
                  color="#fff"
                  borderRadius="50%"
                  w="1.5rem"
                  h="1.5rem"
                  fontSize="xs"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {totalItems}
                </Text>
              )}
            </Flex>

            <Flex
              gap="1rem"
              alignSelf="center"
              px="1rem"
              py="0.5rem"
              borderRadius="100px"
              border={`1px solid ${theme.colors.primary}`}
              transition="all .2s ease"
              role="group"
              ml="auto"
              _hover={{
                bg: theme.colors.primary,
              }}
            >
              <Text color="#202020" _groupHover={{ color: "#fff" }}>
                Contact us
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
