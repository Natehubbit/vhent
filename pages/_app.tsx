import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../common/theme";
import Navbar from "../components/Navbar";
import "../styles/global.scss";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
