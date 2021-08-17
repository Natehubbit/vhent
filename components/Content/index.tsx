import {
  Box,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/layout";
import React, { FC, useEffect, useState } from "react";
import { OPTIONS, ROUTES } from '../../common/constants';
import ButtonSelector from "../ButtonSelector";
import Card from "../Card";
import { useRouter } from 'next/router';
import { RouteKey } from "../../types/types";

interface ContentProps {
}

const Content: FC<ContentProps> = () => {
  const { pathname: path } = useRouter()
  const [title, setTitle] = useState<RouteKey>('Stories')
  useEffect(() => {
    const label = Object
      .keys(ROUTES)
      .find(k => {
        const key = k as keyof typeof ROUTES
        const route = ROUTES[key]
        if (path === '/') {
          return 'Stories'
        }
        if (path === route.path) {
          return key
        }
      }) as RouteKey | undefined
    label && setTitle(label)
  }, [path])
  return (
    <Flex
      bg="white"
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
        <Text>{title}</Text>
        <ButtonSelector options={OPTIONS} />
      </Flex>
      <Divider />
      <Box>
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Flex>
  );
};

export default Content;
