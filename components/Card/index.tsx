import {
  Box,
  Divider,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import Avatar from "../Avatar";
import styles from "./style.module.scss";
import CardAction from "../CardAction";

const Card = () => {
  return (
    <>
      <Flex p={5} className={styles.container}>
        <Box mr={5} minW={50}>
          <Avatar
            size="xs"
            uri="https://picsum.photos/200/300"
          />
        </Box>
        <Flex flex={3} flexDirection="column">
          <Text fontSize="md" mb={1} fontFamily="firaSans">
            Story time
          </Text>
          <Text fontSize="sm" color="gray.700" mb={5}>
            In publishing and graphic design, Lorem ipsum is
            a placeholder text commonly used to demonstrate
            the visual form of a document or a typeface
            without relying on meaningful content. Lorem
            ipsum may be used as a placeholder before final
            copy is available.
          </Text>
          <CardAction
            actions={{
              comment: { count: 5 },
              like: { liked: true, count: 20 },
            }}
          />
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Card;
