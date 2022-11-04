import React from "react";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import {
    Box,
    Button,
    Container,
    FormLabel,
    Grid,
    Input,
    Text,
} from "@chakra-ui/react";

const RegisterForm: React.FC = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(7, "The password must have at least 7 characters")
            .required("Required"),
    });
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    surname: "",
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(values);
                    
                }}
            >
                {({
                    values,

                    errors,

                    touched,

                    handleChange,

                    handleBlur,

                    handleSubmit,

                    isSubmitting,
                }) => (
                    <Container>
                        <form onSubmit={handleSubmit}>
                            <Grid alignContent="center" gap="2rem">
                                <Box>
                                    <FormLabel fontSize="lg">Nombre</FormLabel>
                                    <Input
                                        size="sm"
                                        type="name"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <ErrorMessage name="email" component="div">
                                        {(msg) => (
                                            <Text color="red">{msg}</Text>
                                        )}
                                    </ErrorMessage>
                                </Box>
                                <Box>
                                    <FormLabel fontSize="lg">Apellido</FormLabel>
                                    <Input
                                        size="sm"
                                        type="surname"
                                        name="surname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.surname}
                                    />
                                    <ErrorMessage name="email" component="div">
                                        {(msg) => (
                                            <Text color="red">{msg}</Text>
                                        )}
                                    </ErrorMessage>
                                </Box>
                                <Box>
                                    <FormLabel fontSize="lg">Email</FormLabel>
                                    <Input
                                        size="sm"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <ErrorMessage name="email" component="div">
                                        {(msg) => (
                                            <Text color="red">{msg}</Text>
                                        )}
                                    </ErrorMessage>
                                </Box>
                                <Box>
                                    <FormLabel fontSize="lg">
                                        Password
                                    </FormLabel>
                                    <Input
                                        size="sm"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                    >
                                        {(msg) => (
                                            <Text color="red">{msg}</Text>
                                        )}
                                    </ErrorMessage>
                                </Box>
                                
                                <Button type="submit" isLoading={isSubmitting}>
                                    Submit
                                </Button>
                            </Grid>
                        </form>
                    </Container>
                )}
            </Formik>
        </>
    );
};

export default RegisterForm;
