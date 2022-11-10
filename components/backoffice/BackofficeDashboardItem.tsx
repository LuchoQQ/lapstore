import { Flex, Grid, Icon, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
    icon?: IconType;
    title: string;
    subtitle: string;
    image?: string;
    reverse?: boolean;
};

const BackofficeDashboardItem: React.FC<Props> = ({
    icon,
    title,
    subtitle,
    image,
    reverse,
}) => {
    const theme = useTheme();
    return (
        <>
            <Flex
                w="80%"
                px="2rem"
                py="1rem"
                bg="#fff"
                borderRadius="20px"
                justifyContent="start"
                flexDirection={reverse ? "row-reverse" : "row"}
                alignItems="center"
                gap="1rem"
            >
                {image && <Image src={image} w="70px" justifySelf='flex-end'/>}
                {icon && (
                    <>
                        <Flex
                            w="50px"
                            h="50px"
                            justifyContent="center"
                            alignItems="center"
                            bg="#faedf6"
                            borderRadius="50%"
                        >
                            <Icon
                                as={icon}
                                fontSize="3xl"
                                fill={theme.colors.primary}
                            />
                        </Flex>
                    </>
                )}
                <Grid>
                    <Text
                        fontFamily={theme.fonts.primary}
                        fontSize="sm"
                        color="#dfb8d3"
                    >
                        {title}
                    </Text>
                    <Text fontFamily={theme.fonts.secondary} fontSize="2xl">
                        {subtitle}
                    </Text>
                </Grid>
            </Flex>
        </>
    );
};

export default BackofficeDashboardItem;
