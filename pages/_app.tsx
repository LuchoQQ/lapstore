import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/global.css";
import "@fontsource/merriweather-sans";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      primary: "Merriweather Sans",
      secondary: "Poppins",
      tertiary: "Roboto",
    },
    colors: {
      primary: "#F33464",
      secondary: '#33C2F2',
      background: '#9fbded'
    }
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps}></Component>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
