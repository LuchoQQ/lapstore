import {
  Box,
  Button,
  Flex,
  FormLabel,
  Grid,
  Input,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";
import BackofficeTable from "./BackofficeTable";

type Props = {
  products: Product[];
};

const BackofficeProducts: React.FC<Props> = ({ products }) => {
  const [addProduct, setAddProduct] = React.useState(false);
  const theme = useTheme();

  const handleForm = () => {

  }

  return (
    <>
      <Text
        fontSize="2xl"
        fontFamily={theme.fonts.primary}
        textAlign="center"
        p=".5rem"
      >
        Products
      </Text>
      <Flex p="1rem 2rem">
        <Box
          p=".5rem 1rem"
          borderRadius="20px"
          bg="green"
          onClick={() => setAddProduct(!addProduct)}
        >
          <Text fontFamily={theme.fonts.primary}>Agregar</Text>
        </Box>
      </Flex>

      {addProduct ? (
        <>
          <Flex w="100%" h="100%" flexDir="column" px='1rem'>
            <Box>
              <FormLabel>Nombre</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Price</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Image</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Trademark</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>CPU_Fabricant</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Processor</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Graphics</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Storage</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Memory</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Memory Description</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Screen</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Quantity</FormLabel>
              <Input />
            </Box>


              {/* <Button onClick={() => >Enviar</Button> */}
          </Flex>

        </>
      ) : (
        <>
          <BackofficeTable products={products} />
        </>
      )}
    </>
  );
};

export default BackofficeProducts;
