import { Flex, Grid, Text, Image, Badge } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";
type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <>
      <Grid
        flexDir="column"
        p=".5rem"
        border="1px solid black"
        maxW="250px"
        maxH="400px"
      >
        <Image src={product.image} />
        <Flex></Flex>
        <Text>{product.title}</Text>
        <Text fontSize="xl">{`$${product.price}0,00`}</Text>
      </Grid>
    </>
  );
};

export default ProductCard;
