import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
      },
    },
  },
  fonts: {
    heading: "Mingzat, sans-serif",
  },
  breakpoints: {
    sm: "320px",
    md: "1024px",
    lg: "1440px"
  }
});

export default theme;
