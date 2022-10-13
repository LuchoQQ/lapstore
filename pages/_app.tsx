import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/global.css";
import "@fontsource/merriweather-sans";
import Header from "./components/Header";
function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      primary: "Merriweather Sans",
      secondary: "Poppins",
    },
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
