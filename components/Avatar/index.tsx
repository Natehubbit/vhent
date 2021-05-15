import React, { FC } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

interface AvatarProps {
  uri: string;
  size?: "lg" | "xs";
}

const Avatar: FC<AvatarProps> = ({ uri, size }) => {
  const isSmall = size === "xs";
  const dimensions = isSmall
    ? { height: 50, width: 50 }
    : { height: 100, width: 100 };
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
