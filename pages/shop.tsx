import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import type { NextPage, GetStaticProps } from "next";
import api from "../api";
import type { Product, Filter } from "../types";
import ProductCard from "../components/ProductCard";
import { useMemo, useState } from "react";
import CPU_Fabricant from "../components/categories/cpu_fabricant._filter";
import Memory_filter from "../components/categories/memory_filter";
import Graphics_filter from "../components/categories/graphics_filter";
import Trademark_filter from "../components/categories/trademark_filter";
import Price_filter from "../components/categories/price_filter";
import DetailsModal from "../components/DetailsModal";
type Props = {
  products: Product[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = await api.product.list();
  return {
    props: {
      products,
    },
  };
};

const Home: NextPage<Props> = ({ products }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    trademark: "",
    image: "",
    cpu_fabricant: "",
    processor: "",
    graphics: "",
    storage: "",
    memory: "",
    memory_description: "",
    screen: "",
    quantity: 0,
  });

  const [filters, setFilters] = useState<Record<string, Filter>>({
    title: null,
    price: null,
    cpu_fabricant: null,
    processor: null,
    graphics: null,
    storage: null,
    memory: null,
  });

  const matches = useMemo(() => {
    const filtersToAplly = Object.values(filters).filter(Boolean);
    let matches = products;

    for (let filter of filtersToAplly) {
      matches = matches.filter(filter!);
    }
    return matches;
  }, [products, filters]);

  console.log(data);
  const theme = useTheme();
  return (
    <>
      <DetailsModal
        data={data}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
      <Box h="4.5rem"></Box>
      <Flex fontFamily={theme.fonts.primary} fontSize="sm" bg="#f3f4f5">
        <Flex
          bg="#fff"
          position={[
            "absolute",
            "absolute",
            "relative",
            "relative",
            "relative",
          ]}
          left={["-100vw", "-200px", "0px", "0px", "0px"]}
          flexDir="column"
          minW="300px"
          minH="100vh"
          p="0rem 1rem 1rem 1rem"
          gap="1rem"
        >
          <Flex mt="5vh">
            <Text fontSize="2xl" textAlign="center">
              FILTROS
            </Text>
          </Flex>
          <Price_filter
            onChange={(filter: Filter) =>
              setFilters((filters) => ({ ...filters, price: filter }))
            }
          />
          <CPU_Fabricant
            onChange={(filter: Filter) =>
              setFilters((filters) => ({ ...filters, cpu_fabricant: filter }))
            }
            products={products}
          />
          <Memory_filter
            products={products}
            onChange={(filter: Filter) =>
              setFilters((filters) => ({ ...filters, Memory_filter: filter }))
            }
          />
          <Graphics_filter
            products={products}
            onChange={(filter: Filter) =>
              setFilters((filters) => ({ ...filters, Graphics_filter: filter }))
            }
          />
          <Trademark_filter
            products={products}
            onChange={(filter: Filter) =>
              setFilters((filters) => ({
                ...filters,
                Trademark_filter: filter,
              }))
            }
          />
        </Flex>

        <Flex
          mt="1rem"
          flexWrap="wrap"
          gap="2rem"
          justifyContent="center"
          w={["90vw", "90vw", "70vw", "70vw", "70vw"]}
        >
          {matches.map((product, index) => {
            return (
              <>
                <ProductCard
                  product={product}
                  key={index}
                  setModalOpen={setModalOpen}
                  setData={setData}
                />
              </>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
