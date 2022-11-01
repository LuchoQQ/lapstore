import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Input,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    theme,
    useTheme,
} from "@chakra-ui/react";
import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import SignInForm from "../components/SignInForm";

const User: React.FC = () => {
    const [register, setRegister] = useState(false);
    const theme = useTheme();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(7, "The password must have at least 7 characters")
            .required("Required"),
    });
    return (
        <>
            <Flex justifyContent="center">
                <Flex
                    w="30%"
                    h="auto"
                    pt="15vh"
                    justifyItems="center"
                    flexDir="column"
                    alignItems="center"
                >
                    <Tabs w='100%'>
                        <TabList>
                            <Tab>Login</Tab>
                            <Tab>Register</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <SignInForm />
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>

                        </TabPanels>
                    </Tabs>
                    <Text
                        fontFamily={theme.fonts.primary}
                        textAlign="center"
                        fontSize="sm"
                        mt=".5rem"
                    >
                    </Text>
                </Flex>
                <Grid w="50%" h="100vh" bg="blue" />
            </Flex>
        </>
    );
};

export default User;
