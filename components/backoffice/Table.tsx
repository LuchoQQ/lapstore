import { Icon, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdOpenInNew, MdOutlineDelete } from "react-icons/md";
import { User } from "../../types";


type Props = {
    users: User[];
}


const Table: React.FC<Props> = (props) => {
    const users = props.users;
    console.log(typeof users)
    return (
        <>
            <TableContainer>
                <Table>
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
                        {/* {users.map((user: User) => {
                            return (
                                <Tr>
                                    <Td>{user.name}</Td>
                                    <Td>{user.role}</Td>
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
                                            onClick={() => {
                                                console.log("delete");
                                            }}
                                        />
                                    </Td>
                                </Tr>
                            );
                        })} */}
                    </Tbody>
                    </Table>
            </TableContainer>
        </>
    );
};

export default Table;
