import { Checkbox, Flex, Text } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { Filter, Product } from "../../types";

type Props = {
  products: Product[];
  onChange: (filter: Filter) => void;
};

const Graphics_filter: React.FC<Props> = ({ products, onChange }) => {
  const [selected, setSelected] = useState<Set<string>>(() => new Set());

  const graphics_filter = useMemo(() => {
    const buffer: Set<string> = new Set();
    for (let product of products) {
      buffer.add(product.graphics);
    }
    return Array.from(buffer);
  }, []);

  const handleChange = (graphics_filter: string, isChecked: boolean) => {
    const draft = structuredClone(selected);

    if (isChecked) {
      draft.add(graphics_filter);
    } else {
      draft.delete(graphics_filter);
    }
    onChange(draft.size ? (product) => draft.has(product.graphics) : null);
    setSelected(draft);
  };
  return (
    <>
      <Flex id="ram" flexDir="column" p="1rem" border="1px solid black" bg='#fff' rounded='20px'>
        {graphics_filter.map((graphics, index) => {
          return (
            <>
              <Flex alignItems="center"  key={index} gap=".5rem">
                <Checkbox
                  type="checkbox"
                  name="graphics"
                  value={graphics}
                  onChange={(e) => handleChange(graphics, e.target.checked)}
                />
                <Text fontSize="sm">{graphics}</Text>
              </Flex>
            </>
          );
        })}
      </Flex>
    </>
  );
};

export default Graphics_filter;
