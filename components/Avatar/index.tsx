import React, { FC } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

interface AvatarProps {
  uri: string;
  size?: "sm" | "xs" | 'lg';
}

const Avatar: FC<AvatarProps> = ({ uri, size }) => {
  const isSmall = size === "xs";
  const isSm = size === 'sm'
  const dimensions = isSmall
    ? { height: 50, width: 50 }
    : isSm
      ? { height: 100, width: 100 }
      : { height: 200, width: 200 }
  return (
    <Image
      className={styles.container}
      {...dimensions}
      alt="avatar"
      src={uri}
    />
  );
};

export default Avatar;
