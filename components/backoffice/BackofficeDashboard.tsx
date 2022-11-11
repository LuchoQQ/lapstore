import { Box, Flex, Grid, Icon, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { BsCart4, BsFillBarChartFill } from "react-icons/bs";
import { FaHandHoldingUsd, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import BackofficeDashboardItem from "./BackofficeDashboardItem";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BackofficeDashboard: React.FC = () => {
    const theme = useTheme();

    var options = {
        colors: [theme.colors.primary],
        chart: {
            id: "basic-bar",
            fontFamily: theme.fonts.primary,
        },
        xaxis: {
            categories: [
                "enero",
                "febrero",
                "marzo",
                1994,
                1995,
                1996,
                1997,
                1998,
            ],
        },
    };
    var series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
    ];

    var options2 = {
        colors: ["#F33464", "#DB18C2", "#BC27F2", "#6518DB", "#281BF9"],
    };
    var series2 = [44, 55, 41, 17, 15];
    var labels: ["A", "B", "C", "D", "E"];
    return (
        <>
            <Grid
                w="100%"
                justifyContent="space-around"
                templateColumns="repeat(3, 1fr)"
                gap="1rem"
            >
                <BackofficeDashboardItem
                    icon={BsFillBarChartFill}
                    title="Earnings"
                    subtitle="$350.4"
                />
                <BackofficeDashboardItem
                    icon={IoLogoUsd}
                    title="Spend this month"
                    subtitle="$350.4"
                />
                <BackofficeDashboardItem
                    icon={FaHandHoldingUsd}
                    title="Sells"
                    subtitle="124"
                />
                <BackofficeDashboardItem
                    title="You balance"
                    subtitle="$1000USD"
                    image="https://res.cloudinary.com/diylksocz/image/upload/v1666332719/eeuu_flag_txf6yj.svg"
                    reverse={true}
                />
                <BackofficeDashboardItem
                    icon={BsCart4}
                    title="Total Products"
                    subtitle="142"
                />
                <BackofficeDashboardItem
                    icon={FaRegMoneyBillAlt}
                    title="Solds"
                    subtitle="1520"
                />
            </Grid>
            <Flex bg="#fff" mt="1rem" borderRadius="20px" flexDir="column">
                <Flex>
                    <Grid justifyContent="center" px="1rem" py="1rem">
                        <Text
                            fontFamily={theme.fonts.secondary}
                            fontSize="2xl"
                            px="1rem"
                        >
                            Sells by Month
                        </Text>
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            width="400"
                        />
                    </Grid>
                    <Grid justifyContent="center" px="1rem" py="1rem">
                        <Text
                            fontFamily={theme.fonts.secondary}
                            fontSize="2xl"
                            px="1rem"
                        >
                            This year
                        </Text>
                        <Chart
                            options={options2}
                            series={series2}
                            type="donut"
                            width="380"
                        />
                    </Grid>
                </Flex>

                <Flex>
                    <Grid justifyContent="center" px="1rem" py="1rem">
                        <Text
                            fontFamily={theme.fonts.secondary}
                            fontSize="2xl"
                            px="1rem"
                        >
                            Sells by Month
                        </Text>
                        <Chart
                            options={options}
                            series={series}
                            type="area"
                            width="400"
                        />
                    </Grid>
                    <Grid justifyContent="center" px="1rem" py="1rem">
                        <Text
                            fontFamily={theme.fonts.secondary}
                            fontSize="2xl"
                            px="1rem"
                        >
                            This year
                        </Text>
                        <Chart
                            options={options2}
                            series={series2}
                            type="pie"
                            width="380"
                        />
                    </Grid>
                </Flex>
            </Flex>
        </>
    );
};

export default BackofficeDashboard;
