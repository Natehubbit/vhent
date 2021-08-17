import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/layout";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Homey" }: Props) => (
  <Flex
    minH="100vh"
    direction="column"
    justifyContent="space-between"
  >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>
    <Flex flex={1} direction="row" bg="gray.100">
      <Box display={{ base: "none", lg: "block" }} flex={2}>
        <Sidebar />
      </Box>
      <Box flex={{ base: 12, lg: 10, xl: 8, "2xl": 6 }}>
        {children}
      </Box>
      <Box flex={{ base: 0, lg: 0, xl: 2, "2xl": 2 }} />
    </Flex>
    <Footer />
  </Flex>
);

export default Layout;
