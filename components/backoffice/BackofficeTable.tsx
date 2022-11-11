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
    Toast,
    useToast,
} from "@chakra-ui/react";
import { MdOpenInNew, MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import React from "react";
import { Product } from "../../types";
import axios from "axios";

type Props = {
    products: Product[];
};



const BackofficeTable: React.FC<Props> = (props) => {
    const toast = useToast();

    const products = props.products;


    const deleteProduct = async (id: string) => {
        try {
            await axios
                .delete(`http://localhost:4000/products/${id}`)
                .then((res) => {
                    if (res.status === 200) {
                        toast({
                            title: "Product deleted",
                            description: "The product has been deleted",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                        });
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <TableContainer bg='#f3f4f5'>
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
                        {products.map((product: Product) => {
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
                                        <Icon
                                            as={MdOutlineDelete}
                                            fontSize="xl"
                                            onClick={() =>
                                                deleteProduct(product._id)
                                            }
                                        />
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
