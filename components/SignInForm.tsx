import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Grid,
    Input,
    Text,
} from "@chakra-ui/react";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import React from "react";

const SignInForm: React.FC = () => {
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
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(values);
                    //submit
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
                        <FormControl as="form" onSubmit={handleSubmit}>
                            <Grid alignContent="center" gap="2rem">
                                <Box>
                                    <FormLabel fontSize="xl">Email</FormLabel>
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
                                    <FormLabel fontSize="xl">
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
                        </FormControl>
                    </Container>
                )}
            </Formik>
        </>
    );
};

export default SignInForm;
