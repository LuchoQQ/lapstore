import {
  Table,
  TableCaption,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
  Icon,
} from "@chakra-ui/react";
import { MdOpenInNew, MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import React from "react";
import { Product } from "../../types";

type Props = {
  products: Product[];
};

const BackofficeTable: React.FC<Props> = (props) => {
  const products = props.products;
  const keys = Object.values(products[0]);
  return (
    <>
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Trademark</Th>
              <Th>Processor</Th>
              <Th>Ver</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr></Tr>
            {products.map((product: any) => {
              return (
                <Tr>
                  <Td>{product.name}</Td>
                  <Td>{`$${product.price}`}</Td>
                  <Td>{product.trademark}</Td>
                  <Td>{product.processor}</Td>
                  <Td>
                    <Icon as={MdOpenInNew} fontSize="xl" />
                  </Td>
                  <Td>
                    <Icon as={FaEdit} fontSize="xl" />
                  </Td>
                  <Td>
                    <Icon as={MdOutlineDelete} fontSize="xl" />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BackofficeTable;
