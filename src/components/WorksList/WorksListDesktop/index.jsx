import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./styles";

const WorksListDesktop = ({ menuProjects }) => {
  return (
    <Box {...styles.projectsContainer}>
      {menuProjects.map((project, key) => (
        <Link href={"/projects/" + project.filename} key={key}>
          <Heading {...styles.projectsHeading} color={project.color}>
            {project.title}
          </Heading>
        </Link>
      ))}
    </Box>
  );
};

WorksListDesktop.propTypes = {
  menuProjects: PropTypes.array.isRequired,
};

export default WorksListDesktop;
