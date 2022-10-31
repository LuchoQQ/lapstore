import { Checkbox, Flex, Text } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { Filter, Product } from "../../types";

type Props = {
  products: Product[];
  onChange: (filter: Filter) => void;
};

const Memory_filter: React.FC<Props> = ({ products, onChange }) => {
  const [selected, setSelected] = useState<Set<string>>(() => new Set());

  const memories_filter = useMemo(() => {
    const buffer: Set<string> = new Set();
    for (let product of products) {
      buffer.add(product.memory);
    }
    return Array.from(buffer);
  }, [products]);

  const handleChange = (memory: string, isChecked: boolean) => {
    const draft = structuredClone(selected);
    if (isChecked) {
      draft.add(memory);
    } else {
      draft.delete(memory);
    }
    onChange(draft.size ? (product) => draft.has(product.memory) : null);
    setSelected(draft);
  };

  return (
    <>
      <Flex id="ram" flexDir="column" p="1rem" border="1px solid black" bg='#fff' rounded='20px'>
        <Text mb="1rem">Memoria RAM</Text>
        {memories_filter.map((memory, index) => {
          return (
              <Flex gap=".5rem" key={index}>
                <Checkbox
                  type="checkbox"
                  name="memory"
                  value={memory}
                  onChange={(e) => handleChange(memory, e.target.checked)}
                />
                <Text fontSize="sm">{`${memory}GB`}</Text>
              </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default Memory_filter;
