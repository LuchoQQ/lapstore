import { Checkbox, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { Filter, Product } from "../../../types";

type Props = {
  products: Product[];
  onChange: (filter: Filter) => void;
};

const cpu_fabricant_filter: React.FC<Props> = ({ products, onChange }) => {
  const [selected, setSelected] = useState<Set<string>>(() => new Set());

  //filter logic
  const cpu_fabricant = useMemo(() => {
    const buffer: Set<string> = new Set();
    for (let product of products) {
      buffer.add(product.cpu_fabricant);
    }
    return Array.from(buffer);
  }, [products]);

  // checkbox listener
  const handleChange = (cpu_fabricant: string, isChecked: boolean) => {
    const draft = structuredClone(selected);

    if (isChecked) {
      draft.add(cpu_fabricant);
    } else {
      draft.delete(cpu_fabricant);
    }
    onChange(draft.size ? (product) => draft.has(product.cpu_fabricant) : null);
    setSelected(draft);
  };

  useEffect(() => {}, [selected]);
  return (
    <>
      <Flex flexDir="column" p="1rem" border="1px solid black">
        <Text mb="1rem">Procesador</Text>
        {cpu_fabricant.map((fabricant, index) => {
          return (
            <>
              <Flex alignItems="center" gap=".5rem" key={index}>
                <Checkbox
                  type="checkbox"
                  name="cpu_fabricant"
                  value={fabricant}
                  onChange={(e) => handleChange(fabricant, e.target.checked)}
                />
                <Text fontSize="sm">{fabricant}</Text>
              </Flex>
            </>
          );
        })}
      </Flex>
    </>
  );
};

export default cpu_fabricant_filter;
