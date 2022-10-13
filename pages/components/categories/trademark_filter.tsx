import { Checkbox, Flex, Text } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { Filter, Product } from "../../../types";

type Props = {
  products: Product[];
  onChange: (filter: Filter) => void;
};

const Trademark_filter: React.FC<Props> = ({ products, onChange }) => {
  const [selected, setSelected] = useState<Set<string>>(() => new Set());

  const trademark_filter = useMemo(() => {
    const buffer: Set<string> = new Set();
    for (let product of products) {
      buffer.add(product.trademark);
    }
    return Array.from(buffer);
  }, [products]);

  const handleChange = (trademark: string, isChecked: boolean) => {
    const draft = structuredClone(selected);

    if (isChecked) {
      draft.add(trademark);
    } else {
      draft.delete(trademark);
    }
    onChange(draft.size ? (product) => draft.has(product.trademark) : null);
    setSelected(draft);
  };
  return (
    <>
      <Flex flexDir="column" p="1rem" border="1px solid black">
        <Text mb='1rem'>Marca</Text>
        {trademark_filter.map((trademark, index) => {
          return (
            <>
              <Flex alignItems="center" gap=".5rem" key={index}>
                <Checkbox
                  type="checkbox"
                  name="trademark"
                  value={trademark}
                  onChange={(e) => handleChange(trademark, e.target.checked)}
                />
                <Text fontSize="sm">{trademark}</Text>
              </Flex>
            </>
          )
        })}
      </Flex>
    </>
  );
};

export default Trademark_filter;
