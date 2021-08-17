import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import React, { FC, useState } from "react";
import { Box, Text, Flex } from '@chakra-ui/layout';

interface ButtonSelectProps {
  options: { label: string; value: string }[];
}

const ButtonSelector: FC<ButtonSelectProps> = ({
  options,
}) => {
  const [value, setValue] = useState(options[0]?.value);
  const onSelect = (val: string) => {
    setValue(val);
  };
  return (
    <Menu gutter={2} colorScheme='purple' placement="bottom-end">
      <MenuButton>
        <Flex
          alignItems='center'
          bg='purple.50'
          p='1'
          px='3'
          borderRadius='md'>
          <Text mr='2'>
            {
              options.find((opt) => opt.value === value)
                ?.label
            }
          </Text>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList shadow="xl">
        {options.map((opt) => {
          return (
            <MenuItem
              _hover={{
                backgroundColor: 'purple.100'
              }}
              _focus={{
                backgroundColor: 'purple.100'
              }}
              key={opt.value}
              fontSize='md'
              onClick={() => onSelect(opt.value)}
            >
              {opt.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ButtonSelector;
