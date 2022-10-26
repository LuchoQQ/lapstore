import { Box, Flex, Grid, Icon, Text, useTheme } from "@chakra-ui/react";
import type { NextPage, GetStaticProps } from "next";
import type { Product, Filter } from "../types";
import ProductCard from "../components/ProductCard";
import { useMemo, useState } from "react";
import CPU_Fabricant from "../components/categories/cpu_fabricant._filter";
import Memory_filter from "../components/categories/memory_filter";
import Graphics_filter from "../components/categories/graphics_filter";
import Trademark_filter from "../components/categories/trademark_filter";
import Price_filter from "../components/categories/price_filter";
import DetailsModal from "../components/DetailsModal";
import { BsFilterSquare } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
type Props = {
  products: Product[];
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetch('http://localhost:4000/products')

  return {
    props: {
      products: await products.json(),
    }
  };
};

const Home: NextPage<Props> = ({products}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [data, setData] = useState<Product>({
    id: 0,
    name: "",
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

  const theme = useTheme();
  return (
    <>
      <DetailsModal
        data={data}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
      <Box h="6rem" bg="#f3f4f5"></Box>
      <Flex
        justifyContent="center"
        alignContent="center"
        display={["flex", "flex", "none", "none", "none"]}
      >
        <Flex
          alignItems="center"
          fontFamily={theme.fonts.primary}
          gap=".2rem"
          border="1px solid #202020"
          p=".5rem"
          rounded="100px"
          m="1rem"
          onClick={() => setMobileFilters(!mobileFilters)}
        >
          <Text>Filters</Text>
          <Icon as={IoAdd} />
        </Flex>
      </Flex>
      <Flex
        fontFamily={theme.fonts.primary}
        fontSize="sm"
        bg="#f3f4f5"
        justifyContent="center"
      >
        {/* <Flex
          bg="#f3f4f5"
          position={[
            "absolute",
            "absolute",
            "relative",
            "relative",
            "relative",
          ]}
          transition="all 0.4s ease"
          left={[
            mobileFilters ? "0" : "-100vw",
            mobileFilters ? "0" : "-100vw",
            "0px",
            "0px",
            "0px",
          ]}
          flexDir="column"
          minW="300px"
          minH="100vh"
          p="0rem 1rem 1rem 1rem"
          gap="1rem"
          mr="2rem"
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
        </Flex> */}

        <Grid
          mt="1rem"
          flexWrap="wrap"
          gap="2rem"
          minW={["100px", "100px", "500px", "500px", "800px"]}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          justifyContent="center"
        >
          {matches.length === 0 && (
            <>
              <Flex></Flex>
              <Flex justifyContent='center' alignContent='center' alignSelf='center'>
                <Text fontSize="2xl" textAlign='center' >No se encontraron productos :(</Text>
              </Flex>
              <></>
            </>
          )}
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
        </Grid>
      </Flex>
    </>
  );
};

export default Home;
