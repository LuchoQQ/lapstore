import { Flex } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";
type Props = {
  product: Product;
};

const ProductCard: React.FC<Props>= ({ product }) => {
  return (
    <>
      <Flex>
        <Image src={product.image} />
      </Flex>
    </>
  );
};

export default ProductCard;
