import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Input,
    NumberInput,
    NumberInputField,
    Text,
    useToast,
    useTheme,
    FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Product } from "../../types";
import BackofficeTable from "./BackofficeTable";
import axios from "axios";
type Props = {
    products: Product[];
};

const BackofficeProducts: React.FC<Props> = ({ products }) => {
    const [addProduct, setAddProduct] = React.useState(false);
    const [file, setFile] = useState(null);
    const toast = useToast();
    const theme = useTheme();

    const uploadFile = (e: any) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const onSubmit = async (values: any, e: any) => {
        try {
            console.log(values);
            values.image = file;
            const formData = new FormData();
            formData.append("image", values.image);
            formData.append("name", values.name);
            formData.append("price", values.price);
            formData.append("trademark", values.trademark);
            formData.append("cpu_fabricant", values.cpu_fabricant);
            formData.append("processor", values.processor);
            formData.append("graphics", values.graphics);
            formData.append("storage", values.storage);
            formData.append("memory", values.memory);
            formData.append("memory_description", values.memory_description);
            formData.append("screen", values.screen);
            formData.append("quantity", values.quantity);
            await axios
                .post("http://localhost:4000/products", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then((res) => {
                    if (res.status === 200) {
                        toast({
                            title: "Product created sucessfull",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                        });
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <>
            <Text
                fontSize="2xl"
                fontFamily={theme.fonts.primary}
                textAlign="center"
                p=".5rem"
            >
                Products
            </Text>
            <Flex p="1rem 2rem">
                <Box
                    p=".5rem 1rem"
                    borderRadius="20px"
                    bg="green"
                    onClick={() => setAddProduct(!addProduct)}
                >
                    <Text fontFamily={theme.fonts.primary}>Agregar</Text>
                </Box>
            </Flex>

            {addProduct ? (
                <>
                    <Formik
                        initialValues={{
                            name: "",
                            price: "",
                            image: "",
                            trademark: "",
                            cpu_fabricant: "",
                            processor: "",
                            graphics: "",
                            storage: "",
                            memory: "",
                            memory_description: "",
                            screen: "",
                            quantity: "",
                        }}
                        onSubmit={(values, e) => onSubmit(values, e)}
                        
                    >
                        {({
                            values,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <Container bg='#fff ' p='1rem' borderRadius='20px'>
                                <FormControl as="form">
                                    <Grid alignContent="center" gap="2rem">
                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Name
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                        </Box>
                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Price
                                            </FormLabel>
                                            <NumberInput>
                                                <NumberInputField
                                                    name="price"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.price}
                                                />
                                            </NumberInput>
                                        </Box>
                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Trademark
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="trademark"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.trademark}
                                            />
                                        </Box>
                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Cpu_Fabricant
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="cpu_fabricant"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.cpu_fabricant}
                                            />
                                        </Box>
                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Processor
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="processor"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.processor}
                                            />
                                        </Box>
                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Image
                                            </FormLabel>
                                            <Input
                                                type="file"
                                                name="image"
                                                onChange={(e) => uploadFile(e)}
                                            />
                                        </Box>

                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Graphics
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="graphics"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.graphics}
                                            />
                                        </Box>

                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Storage
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="storage"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.storage}
                                            />
                                        </Box>

                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Memory
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="memory"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.memory}
                                            />
                                        </Box>

                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Memory Description
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="memory_description"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={
                                                    values.memory_description
                                                }
                                            />
                                        </Box>

                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Screen
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="screen"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.screen}
                                            />
                                        </Box>

                                        <Box>
                                            <FormLabel fontSize="xl">
                                                Quantity
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="quantity"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.quantity}
                                            />
                                        </Box>

                                        <Button onClick={(e) => handleSubmit(e, values)}>Submit</Button>
                                    </Grid>
                                </FormControl>
                            </Container>
                        )}
                    </Formik>
                </>
            ) : (
                <>
                    <BackofficeTable products={products} />
                </>
            )}
        </>
    );
};

export default BackofficeProducts;
