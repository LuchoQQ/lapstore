import {
  Flex,
  Grid,
  Text,
  Badge,
  Box,
  Icon,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../types";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCartQuantity } from "../redux/reducers/cartSlice";
import Image from "next/image";

type Props = {
  product: Product;
  setModalOpen: (value: boolean) => void;
  setData: React.Dispatch<React.SetStateAction<Product>>;
};

const ProductCard: React.FC<Props> = ({ product, setModalOpen, setData }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const SERVER_BASE_URL = process.env.SERVER_BASE_URL
  return (
    <>
      <Grid flexDir="column" p=".5rem" maxW="250px" bg="#fff" maxH="500px">
        <Image src={`http://localhost:4000/products/image/${product.image}`} width='250px' height='250px' alt='product' />
        <Flex></Flex>
        <Text>{product.name}</Text>
        <Text fontSize="xl">{`$${product.price}0,00`}</Text>
        <Grid gap="0.5rem" mt="0.5rem">
          <Flex justifyContent="center">
            <Flex
              py="0.5rem"
              w="80%"
              rounded="15px"
              justifyContent="center"
              alignItems="center"
              bg={theme.colors.secondary}
              cursor="pointer"
            >
              <Text color="#f3f4f5" fontFamily={theme.fonts.primary}>
                Comprar
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent="center">
            <Flex
              py="0.5rem"
              w="80%"
              rounded="15px"
              justifyContent="center"
              alignItems="center"
              border={`2px solid ${theme.colors.secondary}`}
              cursor="pointer"
              onClick={() =>
                dispatch(addToCartQuantity({ ...product, quantity: 1 }))
              }
            >
              <Text>
                <Icon as={BsCart4}></Icon> Agregar
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent="center">
            <Flex
              py="0.5rem"
              px="1rem"
              rounded="15px"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() => {
                setData(product);
                setModalOpen(true);
              }}
            >
              <Text>Ver más</Text>
            </Flex>
          </Flex>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductCard;
