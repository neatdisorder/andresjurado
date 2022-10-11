import React from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { Show, Hide } from "@chakra-ui/react";

const Menu = () => {
  return (
    <>
      <Hide above="md">
        <MenuMobile />
      </Hide>
      <Show above="md">
        <MenuDesktop />
      </Show>
    </>
  );
};

export default Menu;
