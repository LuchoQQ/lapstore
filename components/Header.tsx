import { Button, Flex, Image, Text, useTheme, Icon } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaBars, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/reducers/cartSlice";
import CartDrawer from "./CartDrawer";
import NavLink from "./NavLink";
import axios from "axios";
import { useEffect } from "react";
import { login } from "../redux/reducers/userSlice";

type MapProps = {
    name: string;
    path: string;
};

const Header: React.FC = () => {
    const [isDrawerOpen, setDrawerOpen] = React.useState(false);
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const links = {
        Inicio: "/",
        Shop: "/shop",
        About: "/about",
    };

    const theme = useTheme();
    const router = useRouter();
    const cart = useSelector(selectCart)

    const dispatch = useDispatch();
    const totalItems = cart.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    const validateToken = async (token: string) => {
        await axios
            .post(`http://${process.env.SERVER_BASE_URL}/users/me`, null, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                dispatch(
                    login({
                        name: res.data.name,
                        surname: res.data.surname,
                        email: res.data.email,
                        role: res.data.role,
                        createdAt: res.data.createdAt,
                    })
                );
                console.log("Access Granted");
            })
            .catch((err) => console.log("Access Denied"));
    };

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (typeof token === "string") {
            validateToken(token);
        }
    }, []);
    const user = useSelector((state: any) => state.user);
    return (
        <>
            <CartDrawer
                isDrawerOpen={isDrawerOpen}
                setDrawerOpen={setDrawerOpen}
            />
            <Flex
                w="100%"
                fontFamily={theme.fonts.primary}
                fontSize="1xl"
                color="#202020"
                bg="#fff"
                px="5rem"
                py="1rem"
                boxShadow="0px 0px 5px 5px rgba(0,0,0,0.1)"
                position="fixed"
                justifyContent="center"
                zIndex={1000}
            >
                <Flex
                    gap="1rem"
                    alignSelf="center"
                    ml="auto"
                    display={["none", "none", "flex", "flex", "flex"]}
                >
                    {Object.entries(links).map((props, index) => {
                        return (
                            <NavLink
                                path={props[1]}
                                name={props[0]}
                                key={index}
                            />
                        );
                    })}
                {
                    user.role === "admin" && <NavLink path="/backoffice" name="Backoffice" /> 
                }
                
                </Flex>
                <Flex
                    ml="auto"
                    gap="2rem"
                    display={["none", "none", "flex", "flex", "flex"]}
                >
                    <Icon
                        as={FaUserAlt}
                        fontSize="2xl"
                        alignSelf="center"
                        fill="#303030"
                        onClick={() => router.push("/users")}
                    />
                    <Flex>
                        <Icon
                            as={FaShoppingCart}
                            alignSelf="center"
                            fontSize="2xl"
                            onClick={() => setDrawerOpen(true)}
                            fill="#303030"
                            position="relative"
                        />
                        {cart.length > 0 && (
                            <Text
                                bg={theme.colors.primary}
                                color="#fff"
                                borderRadius="50%"
                                w="1.5rem"
                                h="1.5rem"
                                fontSize="xs"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {totalItems}
                            </Text>
                        )}
                    </Flex>
                </Flex>

                {/* MOBILE */}
                <Icon
                    as={FaBars}
                    onClick={() => setMobileMenu(!mobileMenu)}
                    position="relative"
                    display={["block", "block", "none", "none", "none"]}
                />
                <Flex
                    w="100vw"
                    h="100vh"
                    position="fixed"
                    bg="#f3f4f5"
                    transition="all 0.4s ease"
                    top={mobileMenu === true ? "2.9rem" : "-100vh"}
                    justifyContent="center"
                >
                    <Flex
                        flexDir="column"
                        h="90vh"
                        justifyContent="center"
                        gap="3rem"
                    >
                        {Object.entries(links).map((props, index) => {
                            return (
                                <NavLink
                                    path={props[1]}
                                    name={props[0]}
                                    key={index}
                                    handleClick={() => setMobileMenu(false)}
                                    mobileMenu={mobileMenu}
                                />
                            );
                        })}
                        <Flex alignSelf="center">
                            <Icon
                                as={FaShoppingCart}
                                alignSelf="center"
                                fontSize="2xl"
                                onClick={() => setDrawerOpen(true)}
                                position="relative"
                            />
                            {cart.length > 0 && (
                                <Text
                                    bg={theme.colors.primary}
                                    color="#fff"
                                    borderRadius="50%"
                                    w="1.5rem"
                                    h="1.5rem"
                                    fontSize="xs"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    {totalItems}
                                </Text>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Header;
