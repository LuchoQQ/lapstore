import { Flex, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";
type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <>
      <Flex
        flexDir="column"
        p=".5rem"
        border="1px solid black"
        maxW="250px"
        maxH="300px"
      >
        <Image src={product.image} />
        <Text>{product.title}</Text>
      </Flex>
    </>
  );
};

export default ProductCard;
