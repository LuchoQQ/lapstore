import { Box, Flex, Grid, Icon, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { BsCart4, BsFillBarChartFill } from "react-icons/bs";
import { FaHandHoldingUsd, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import BackofficeDashboardItem from "./BackofficeDashboardItem";

const BackofficeDashboard: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Grid w="100%" justifyContent="space-around" templateColumns='repeat(3, 1fr)' gap='1rem'>
               <BackofficeDashboardItem icon={BsFillBarChartFill} title="Earnings" subtitle="$350.4" />
               <BackofficeDashboardItem icon={IoLogoUsd} title="Spend this month" subtitle="$350.4" />
               <BackofficeDashboardItem icon={FaHandHoldingUsd} title="Sells" subtitle="$350.4" />
               <BackofficeDashboardItem title="You balance" subtitle="$1000USD" image="https://res.cloudinary.com/diylksocz/image/upload/v1666332719/eeuu_flag_txf6yj.svg" reverse={true}/>
               <BackofficeDashboardItem icon={BsCart4} title="Products" subtitle="142" />
               <BackofficeDashboardItem icon={FaRegMoneyBillAlt} title="Solds" subtitle="1520" />
            </Grid>
        </>
    );
};

export default BackofficeDashboard;
