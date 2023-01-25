import React from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { Show } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Menu = ({ menuCategories, isIndex }) => {
  return (
    <>
      <Show below="md">
        <MenuMobile isIndex={isIndex} />
      </Show>
      <Show above="md">
        <MenuDesktop menuCategories={menuCategories} isIndex={isIndex} />
      </Show>
    </>
  );
};

Menu.propTypes = {
  menuCategories: PropTypes.array.isRequired,
  isIndex: PropTypes.bool.isRequired,
};

export default Menu;
