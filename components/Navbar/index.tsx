import { Button } from "@chakra-ui/button";
import { Flex, Square, Text } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <Flex
        p={4}
        background="white"
        shadow="sm"
        justifyContent="space-between"
        zIndex={2}
      >
        <Square centerContent>
          <Image
            width="100%"
            src="/images/vhent.svg"
            height={25}
          />
        </Square>
        <Square>
          <Button
            px={10}
            mr={2}
            colorScheme="purple"
            borderRadius={100}
          >
            Signup
          </Button>
          <Button
            px={10}
            colorScheme="purple"
            borderRadius={100}
            variant="outline"
          >
            Login
          </Button>
        </Square>
      </Flex>
    </header>
  );
};

export default Navbar;
