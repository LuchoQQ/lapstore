import { Box, Button, Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import BackofficeTable from "../../components/backoffice/BackofficeTable";
import type { NextPage, GetStaticProps } from "next";
import { Product, User } from "../../types";
import BackofficeSidebar from "../../components/backoffice/BackofficeSidebar";
import BackofficeProducts from "../../components/backoffice/BackofficeProducts";
import BackofficeCustomers from "../../components/backoffice/BackofficeUsers";
import BackofficeUsers from "../../components/backoffice/BackofficeUsers";
import BackofficeDashboard from "../../components/backoffice/BackofficeDashboard";

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
  const [backoffice, setBackoffice] = React.useState("/dashboard");
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (
    <>
      <Flex pt="3.5rem"  gap="1rem" justifyContent="center" bg='#f0dfea'>
        <BackofficeSidebar
          setBackoffice={setBackoffice}
          backoffice={backoffice}
        />  
        <Flex minW={width * (80 / 100)} flexDir="column" mt='1rem'>


          {backoffice === '/dashboard' && <BackofficeDashboard />}
          {backoffice === "/products" && <BackofficeProducts products={products} /> }
          {backoffice === "/users" && <BackofficeUsers data={users} />}
        </Flex>
      </Flex>
    </>
  );
};

export default Backoffice;
