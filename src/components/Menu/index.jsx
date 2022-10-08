import React from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { Show } from "@chakra-ui/react";

const Menu = () => {
  return (
    <>
      <Show below="sm">
        <MenuMobile />
      </Show>
    <Show above="sm">
        <MenuDesktop />
    </Show>
    </>
  );
};

export default Menu;
