import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import React, { FC, useState } from "react";

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
    <Menu gutter={2} placement="bottom-end">
      <MenuButton>
        <Button size="sm" rightIcon={<ChevronDownIcon />}>
          {
            options.find((opt) => opt.value === value)
              ?.label
          }
        </Button>
      </MenuButton>
      <MenuList shadow="xl">
        {options.map((opt) => {
          return (
            <MenuItem
              key={opt.value}
              fontSize="0.9em"
              fontWeight="bold"
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
