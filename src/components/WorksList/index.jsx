import React from "react";
import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const WorksList = ({ menuProjects }) => {
  return menuProjects.map((project, key) => (
    <Heading key={key}>{project}</Heading>
  ));
};

WorksList.propTypes = {
  menuProjects: PropTypes.array.isRequired,
};

export default WorksList;
