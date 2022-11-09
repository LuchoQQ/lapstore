import { Box, Button, Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import BackofficeTable from "../../components/backoffice/BackofficeTable";
import type { NextPage, GetStaticProps } from "next";
import { Product, User } from "../../types";
import BackofficeSidebar from "../../components/backoffice/BackofficeSidebar";
import BackofficeProducts from "../../components/backoffice/BackofficeProducts";
import BackofficeCustomers from "../../components/backoffice/BackofficeCustomers";

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetch("http://localhost:4000/products");
  const users = await fetch("http://localhost:4000/users");
  return {
    props: {
      products: await products.json(),
      users : await users.json()
    },
  };
};

type Props = {
  products: Product[];
  users: User[]
};

const Backoffice: React.FC<Props> = ({ products, users }) => {
  const theme = useTheme();
  const [width, setWidth] = React.useState(0);
  const [backoffice, setBackoffice] = React.useState("/products");
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (
    <>
      <Flex pt="4.5rem" bg="#f3f4f5" gap="1rem" justifyContent="center">
        <BackofficeSidebar
          setBackoffice={setBackoffice}
          backoffice={backoffice}
        />
        <Flex minW={width * (80 / 100)} flexDir="column" bg="#fff">
          <Box w="100%" h="10rem" bg="#f3f4f5"></Box>


          
          {backoffice === "/products" && <BackofficeProducts products={products} /> }
          {backoffice === "/customers" && <BackofficeCustomers data={users} />}
        </Flex>
      </Flex>
    </>
  );
};

export default Backoffice;
