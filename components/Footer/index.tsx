import { Box } from "@chakra-ui/layout";
import React from "react";
import BottomTab from "../BottomTab";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer>
      <Box display={{ base: 'block', lg: 'none' }} className={styles.container}>
        <BottomTab />
      </Box>
    </footer>
  );
};

export default Footer;
