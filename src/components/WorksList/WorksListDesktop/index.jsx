import React from "react";
import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const WorksListDesktop = ({ menuProjects }) => {
  return menuProjects.map((project, key) => (
    <Heading key={key}>{project}</Heading>
  ));
};

WorksListDesktop.propTypes = {
  menuProjects: PropTypes.array.isRequired,
};

export default WorksListDesktop;