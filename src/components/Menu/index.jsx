import React from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { Show, Hide } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Menu = ({ menuCategories, isIndex, menuFilter }) => {
  return (
    <>
      <Hide above="md">
        <MenuMobile menuCategories={menuCategories} />
      </Hide>
      <Show above="md">
        <MenuDesktop menuCategories={menuCategories} isIndex={isIndex} menuFilter={menuFilter} />
      </Show>
    </>
  );
};

Menu.propTypes = {
  menuCategories: PropTypes.array.isRequired,
  isIndex: PropTypes.bool.isRequired,
  menuFilter: PropTypes.func.isRequired
};

export default Menu;
