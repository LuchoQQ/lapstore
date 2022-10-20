import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCartQuantity, selectCart } from "../redux/reducers/cartSlice";
import { BsTrash } from "react-icons/bs";

type Props = {
  isDrawerOpen: boolean;
  setDrawerOpen: (value: boolean) => void;
};

const CartDrawer: React.FC<Props> = ({ isDrawerOpen, setDrawerOpen }) => {
  const theme = useTheme();
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const cartItem: any = [];
  const wppReturn = cart.map((item) => {
    cartItem.push(
      item.title + " - " + item.price + "ARS" + " x " + item.quantity
    );
  });
  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
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
                <Flex
                  flexDir="column"
                  alignItems="center"
                  gap="1rem"
                  fontFamily={theme.fonts.primary}
                >
                  <Flex fontSize="md">
                    x{item.quantity}
                    <Image src={item.image} w="100px" mr="auto" />
                    <Grid>
                      <Text fontSize="sm">{`${item.title.split(" ")[0]} ${
                        item.title.split(" ")[1]
                      } ${item.title.split(" ")[3]} ${
                        item.title.split(" ")[4]
                      }`}</Text>
                      <Text fontSize="sm">{`$${item.price}`}</Text>
                    </Grid>
                    <Icon
                      as={BsTrash}
                      mt="0.5rem"
                      onClick={() => {
                        dispatch(deleteToCartQuantity(item));
                      }}
                    />
                  </Flex>
                </Flex>
                <Divider />
              </>
            );
          })}
        </DrawerBody>
        <Grid fontFamily={theme.fonts.primary} px="1rem">
          <Text>Cantidad de Productos: {totalItems}</Text>
          <Text>Precio Total: {`$${totalPrice}`}</Text>
        </Grid>

        <Flex mt="1rem" mb="2rem" justifyContent="center" gap="2rem">
          <Flex
            bg="#f3f4f5"
            py="0.5rem"
            px="1rem"
            rounded="5px"
            onClick={() => setDrawerOpen(false)}
            cursor="pointer"
          >
            <Text fontFamily={theme.fonts.primary}>Cancelar</Text>
          </Flex>
          <a href={`https://wa.me/5403794913997?text=${cartItem}`}>
            <Flex bg="#f3f4f5" py="0.5rem" px="1rem" rounded="5px">
              <Icon as={RiWhatsappFill} alignSelf="center" fill="green" />
              <Flex justifyContent="center" alignContent="center">
                <Text fontFamily={theme.fonts.primary}>{` Comprar`}</Text>
              </Flex>
            </Flex>
          </a>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
