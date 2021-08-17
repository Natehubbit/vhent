import { Button, IconButton } from "@chakra-ui/button";
import { Flex, Square, Link, Box, VStack, Divider } from '@chakra-ui/layout';
import Image from "next/image";
import React, { HTMLAttributes, useRef, useState } from "react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { MdMenu } from "react-icons/md";
import { Menu, MenuButton, MenuDivider, MenuItem, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/menu";
import { COLORS } from "../../common/theme";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";

const Navbar = () => {
  const { isOpen, onOpen, onClose, } = useDisclosure()
  let drawerBtnRef = useRef<HTMLButtonElement>()
  return (
    <header>
      <Flex
        py={2}
        px={5}
        background="white"
        shadow="lg"
        justifyContent="space-between"
        zIndex={2}
      >
        <Square centerContent>
          <Link href='/' >
            <Image
              width="100%"
              src="/images/vhent.svg"
              height={25}
            />
          </Link>
        </Square>
        <Box display={{ base: 'none', lg: 'block' }}>
          <Button
            px={10}
            mr={2}
            colorScheme="purple"
          >
            Sign up
          </Button>
          <Button
            px={10}
            colorScheme="purple"
            variant="outline"
          >
            Login
          </Button>
        </Box>
        <Box display={{ base: 'block', lg: 'none' }}>
          <IconButton
            ref={drawerBtnRef as any}
            aria-label='menu'
            size='lg'
            onClick={onOpen}
            icon={<HamburgerIcon />} />
          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement='right'
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack py={50}>
                  <Button
                    px={10}
                    m={2}
                    colorScheme="purple"
                  >
                    Sign up
                   </Button>
                  <Button
                    m={2}
                    px={10}
                    colorScheme="purple"
                    variant="outline"
                  >
                    Login
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </header>
  );
};

export default Navbar;
