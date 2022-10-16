import {
  Flex,
  Grid,
  Text,
  Image,
  Badge,
  Box,
  Icon,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";
import { BsCart4 } from "react-icons/bs";
type Props = {
  product: Product;
  onOpen: () => void;
  setData: (value: object) => void;
};

const ProductCard: React.FC<Props> = ({ product, onOpen, setData }) => {
  const theme = useTheme();
  return (
    <>
      <Grid flexDir="column" p=".5rem" maxW="250px" bg="#fff" maxH="500px">
        <Image src={product.image} />
        <Flex></Flex>
        <Text>{product.title}</Text>
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
                onOpen();
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
