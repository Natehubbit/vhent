import React, { FC } from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/layout";
import styles from "./style.module.scss";
import cx from "classnames/bind";

const cn = cx.bind(styles);

interface LinkProps {
  route: string;
  active?: boolean;
}

const SideNavLink: FC<LinkProps> = ({
  children,
  route,
  active,
}) => {
  return (
    <NextLink href={route}>
      <Link
        className={cn({
          container: true,
          active,
        })}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default SideNavLink;
