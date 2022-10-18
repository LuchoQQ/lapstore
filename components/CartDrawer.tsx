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
  Image,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/reducers/cartSlice";

type Props = {
  isDrawerOpen: boolean;
  setDrawerOpen: (value: boolean) => void;
};

const CartDrawer: React.FC<Props> = ({ isDrawerOpen, setDrawerOpen }) => {
  const theme = useTheme();
  
  const cart = useSelector(selectCart);

  /* const total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
   */

  /* console.log(total); */
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
                <Flex flexDir="column" alignItems="center" gap="1rem" fontFamily={theme.fonts.primary} >
                  <Flex fontSize='md'>
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
                  </Flex>
                </Flex>
                <Divider />
              </>
            );
          })}
        </DrawerBody>
        <Grid fontFamily={theme.fonts.primary} px='1rem'>
          <Text>Cantidad de Productos: {}</Text>
         {/*  <Text>Precio Total: {`$${total}`}</Text> */}
        </Grid>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={() => setDrawerOpen(false)}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
