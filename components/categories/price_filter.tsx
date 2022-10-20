import {
  Box,
  Flex,
  Grid,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Filter } from "../../types";

type Props = {
  onChange: (filter: Filter) => void;
};

const Price_filter: React.FC<Props> = ({ onChange }) => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  const handleMin = (value: number) => {
    setMin(value);
    onChange(
      value ? (product) => product.price >= value && product.price <= max : null
    );
  };
  const handleMax = (value: number) => {
    setMax(value);
    onChange(
      value ? (product) => product.price >= min && product.price <= value : null
    );
  };
  return (
    <>
    
      <Flex id="price" flexDir="column" p="1rem" border="1px solid black" bg='#fff' rounded='20px'>
        <Text>Price Rango</Text>
        <Grid mt="1rem">
          <Box>
            <Text>Min</Text>
            <NumberInput onChange={(e) => handleMin(Number(e))} size="sm">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box>
            <Text>Max</Text>
            <NumberInput onChange={(e) => handleMax(Number(e))} size="sm">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Grid>
      </Flex>
    </>
  );
};

export default Price_filter;
