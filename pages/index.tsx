import type { NextPage, GetStaticProps } from "next";
import api from "../api";
import type { Product } from "../types";

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

const Home: NextPage<Props> = ({products}) => {
  console.log(products)
  return <></>;
};

export default Home;
