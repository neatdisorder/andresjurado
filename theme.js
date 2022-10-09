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
});

export default theme;
