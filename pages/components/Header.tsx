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
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/reducers/cartSlice";
type MapProps = {
  name: string;
  path: string;
};

const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const links = {
    Inicio: "/",
    Shop: "/shop",
    About: "/about",
    Contact: "/contact",
  };

  const theme = useTheme();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  console.log(cart);

  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Revisa tus compras</DrawerHeader>

          <DrawerBody>
            <Divider />
            {cart.map((item) => {
              return (
                <>
                  <Flex flexDir="column" alignItems="center" gap="1rem">
                    <Flex>
                      <Image src={item.image} w="100px" />
                      <Grid>
                        <Text fontSize="sm">{`${item.title.split(" ")[0]} ${
                          item.title.split(" ")[1]
                        } ${item.title.split(" ")[3]} ${
                          item.title.split(" ")[4]
                        }`}</Text>
                        <Text fontSize="sm">{`$${item.price}`}</Text>
                      </Grid>
                    </Flex>
                  </Flex>
                  <Divider />
                </>
              );
            })}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => setDrawerOpen(false)}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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
        <Text>LAPTECH</Text>
        <Flex gap="1rem" alignSelf="center" ml="auto">
          {Object.entries(links).map((props, index) => {
            return (
              <>
                <Text
                  cursor="pointer"
                  onClick={() => router.push(props[1])}
                  color={
                    props[1] === router.pathname
                      ? theme.colors.primary
                      : "#202020"
                  }
                  fontFamily={theme.fonts.primary}
                >
                  {props[0]}
                </Text>
              </>
            );
          })}
        </Flex>
        <Flex ml="auto" gap="2rem">
          <Icon
            as={AiOutlineShoppingCart}
            alignSelf="center"
            fontSize="2xl"
            onClick={() => setDrawerOpen(true)}
          />
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
    </>
  );
};

export default Header;
