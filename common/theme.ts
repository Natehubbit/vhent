import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      fontFamily: "nunito",
    },
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles,
});

export const COLORS = {
  primary: "#805ad5",
  red: "red",
  white: "#fff",
};
