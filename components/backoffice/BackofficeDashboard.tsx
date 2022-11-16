import { Box, Flex, Grid, Icon, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { BsCart4, BsFillBarChartFill } from "react-icons/bs";
import { FaHandHoldingUsd, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import BackofficeDashboardItem from "./BackofficeDashboardItem";
import dynamic from "next/dynamic";
import { AiOutlineCalendar } from "react-icons/ai";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BackofficeDashboard: React.FC = () => {
    const theme = useTheme();

    var options = {
        dataLabels: {
            enabled: false,
        },
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

    var options3 = {
        series: [
            {
                name: "Website Blog",
                type: "column",
                data: [
                    440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 332, 342,
                ],
            },
            {
                name: "Social Media",
                type: "line",
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
            },
        ],
        chart: {
            height: 350,
            type: "line",
        },
        stroke: {
            width: [0, 4],
        },
        title: {
            text: "Traffic Sources",
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1],
        },
        labels: [
            "01 Jan 2001",
            "02 Jan 2001",
            "03 Jan 2001",
            "04 Jan 2001",
            "05 Jan 2001",
            "06 Jan 2001",
            "07 Jan 2001",
            "08 Jan 2001",
            "09 Jan 2001",
            "10 Jan 2001",
            "11 Jan 2001",
            "12 Jan 2001",
        ],
        xaxis: {
            type: "datetime",
        },
        yaxis: [
            {
                title: {
                    text: "Website Blog",
                },
            },
            {
                opposite: true,
                title: {
                    text: "Social Media",
                },
            },
        ],
    };
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
            <Flex flexDir="column" mt="1rem">
                <Grid>
                    <Text
                        fontFamily={theme.fonts.secondary}
                        fontSize="4xl"
                        px="1rem"
                    >
                        $372.4K
                    </Text>
                    <Text
                        fontFamily={theme.fonts.secondary}
                        fontSize="sm"
                        color="#b8b5e4"
                        px="1rem"
                    >
                        Overall Revenue
                    </Text>
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width="500px"
                    />
                </Grid>
            </Flex>
            <Flex mt="1rem" flexDir="column" gap="1rem">
                <Flex
                    bg="#fff"
                    borderRadius="20px"
                    justifyContent="space-around"
                >
                    <Grid py="1rem">
                        <Flex px="1rem">
                            <Icon
                                as={AiOutlineCalendar}
                                alignSelf="center"
                                fontSize="2xl"
                            />
                            <Text
                                fontFamily={theme.fonts.secondary}
                                fontSize="2xl"
                                px=".5rem"
                            >
                                Sells by Month
                            </Text>
                        </Flex>
                        <Chart
                            options={options3}
                            series={series}
                            type="line"
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

                <Flex
                    bg="#fff"
                    borderRadius="20px"
                    justifyContent="space-around"
                >
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
