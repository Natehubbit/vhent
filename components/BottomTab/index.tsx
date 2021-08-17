import React, { useEffect, useState } from "react";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { ROUTES } from "../../common/constants";
import { COLORS } from "../../common/theme";
import cx from "classnames/bind";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { AppRoute } from "../../types/types";
import Link from "next/link";

const cn = cx.bind(styles);

interface BottomTabProps { }

const BottomTab = (_: BottomTabProps) => {
  const { route } = useRouter();
  const [activeLink, setActiveLink] = useState(route);
  useEffect(() => {
    setActiveLink(route === '/' ? '/stories' : route);
  }, [route]);
  const onNav = (route: AppRoute) => {
    setActiveLink(route);
  };
  return (
    <HStack
      className={styles.container}
      shadow="inner"
      p={3}
      justifyContent="center"
      bg={COLORS.white}
      spacing={100}
    >
      {Object.keys(ROUTES).map((k) => {
        const key = k as keyof typeof ROUTES;
        const { icon, path } = ROUTES[key];
        const active = path === activeLink;
        return (
          <Link key={key} href={path}>
            <IconButton
              className={cn({
                btn: true,
                active: active || activeLink === '/',
              })}
              key={key}
              variant="link"
              aria-label={k}
              onClick={() => onNav(path)}
            >
              <VStack>
                <Text>{icon}</Text>
                <Text fontSize="sm">{key}</Text>
              </VStack>
            </IconButton>
          </Link>
        );
      })}
    </HStack>
  );
};

export default BottomTab;
