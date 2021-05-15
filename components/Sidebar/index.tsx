import { Flex } from "@chakra-ui/layout";
import React from "react";
import LinkText from "../SideNavLink";
import { useRouter } from "next/router";
import { ROUTES } from "../../common/constants";
import styles from "./style.module.scss";

const Sidebar = () => {
  const { route: path } = useRouter();
  return (
    <Flex
      flex={1}
      // bg="white"
      p={5}
      m={4}
      borderRadius={10}
      // shadow="md"
      position="sticky"
      top={4}
      className={styles.container}
    >
      <Flex direction="column">
        {Object.keys(ROUTES).map((k) => {
          const key = k as keyof typeof ROUTES;
          const route = ROUTES[key];
          let isActive = path.indexOf(route.path) > -1;
          if (key === "Stories" && path === "/") {
            isActive = true;
          }
          return (
            <LinkText
              active={isActive}
              key={key}
              route={route.path}
            >
              {route.icon} {key}
            </LinkText>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
