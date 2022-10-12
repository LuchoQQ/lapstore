import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/global.css";
import "@fontsource/merriweather-sans";
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
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
