import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  Text,
  useTheme,
} from "@chakra-ui/react";
import type { NextPage, GetStaticProps } from "next";
import api from "../api";
import type { Product, Filter } from "../types";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import { useMemo, useState } from "react";
import PriceFilter from "./components/categories/cpu_fabricant._filter";
import CPU_Fabricant from "./components/categories/cpu_fabricant._filter";
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

  console.log(matches);

  const theme = useTheme();
  return (
    <>
      <Header />
      <Box w="100vw" h="20vh"></Box>
      <Flex fontFamily={theme.fonts.primary} fontSize="sm">
        <Flex
          flexDir="column"
          minW="300px"
          h="100vh"
          p="0rem 1rem 1rem 1rem"
          gap="1rem"
        >
          <Flex>
            <Text fontSize="2xl">FILTROS</Text>
          </Flex>
          <Flex id="price" flexDir="column" p="1rem" border="1px solid black">
            <Text>Price Rango</Text>
            <Grid mt="1rem">
              <Text>Intel</Text>
              <Text>AMD</Text>
            </Grid>
          </Flex>
          <CPU_Fabricant
            onChange={(filter: Filter) =>
              setFilters((filters) => ({ ...filters, cpu_fabricant: filter }))
            }
            products={products}
          />
          <Flex id="ram" flexDir="column" p="1rem" border="1px solid black">
            <Text>Memoria RAM</Text>
            <Text>2gb</Text>
            <Text>4gb</Text>
            <Text>8gb</Text>
          </Flex>
          <Flex id="ram" flexDir="column" p="1rem" border="1px solid black">
            <Text>Gráfica</Text>
            <Text>RTX 3050</Text>
            <Text>RTX 3060</Text>
            <Text>RTX 3070</Text>
          </Flex>
        </Flex>

        <Flex flexWrap="wrap" gap="2rem" justifyContent="center" w="70vw">
          {matches.map((product, index) => {
            return (
              <>
                <ProductCard product={product} key={index} />
              </>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
