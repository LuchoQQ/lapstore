import { Icon, TableContainer, Tbody, Td, Th, Thead, Tr, Table as ChakraTable } from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdOpenInNew, MdOutlineDelete } from "react-icons/md";
import { User } from "../../types";


type Props = {
    users: User[];
}


const Table: React.FC<Props> = (props) => {
    const { users } = props;
    return (
        <>
            <TableContainer>
                <ChakraTable>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Surname</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Ver</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr></Tr>
                        {users.map((user: User, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{user.name}</Td>
                                    <Td>{user.surname}</Td>
                                    <Td>{user.email}</Td>
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
                        })}
                    </Tbody>
                    </ChakraTable>
            </TableContainer>
        </>
    );
};

export default Table;
