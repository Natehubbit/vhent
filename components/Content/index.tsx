import {
  Box,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { OPTIONS } from "../../common/constants";
import ButtonSelector from "../ButtonSelector";
import Card from "../Card";

const Content = () => {
  return (
    <Flex
      bg="white"
      minH="80vh"
      m={4}
      shadow="md"
      borderRadius={10}
      flexDirection="column"
    >
      <Flex
        alignItems="center"
        p={2}
        borderBottom={1}
        justifyContent="space-between"
      >
        <Text>Stories</Text>
        <ButtonSelector options={OPTIONS} />
      </Flex>
      <Divider />
      <Box>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Flex>
  );
};

export default Content;
