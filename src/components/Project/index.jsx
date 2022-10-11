import React from "react";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import ProjectInfo from "./ProjectInfo";
import styles from "./styles";

const Project = ({ projectData }) => {
  console.log(projectData);

  return (
    <Box {...styles.projectContainer}>
      <ProjectInfo
        projectName={projectData.title}
        projectSpecs={projectData.specs}
        projectCredits={projectData.credits}
      />
    </Box>
  );
};

Project.propTypes = {
  projectData: PropTypes.object.isRequired,
};

export default Project;
