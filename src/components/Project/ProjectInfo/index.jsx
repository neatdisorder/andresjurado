import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";
import styles from './styles';

const ProjectInfo = ({ projectName, projectSpecs, projectCredits }) => {

  return (
    <Box {...styles.projectInfoContainer}>
      <Heading {...styles.projectNameHeading}>{projectName}</Heading>
      <Flex {...styles.specsContainer}>
        {projectSpecs.map((spec, key) => (
          <>
            <Heading key={key} {...styles.projectSpecs}>{spec}</Heading>
            <Heading {...styles.projectSpecsDots}>・</Heading>
          </>
        ))}
      </Flex>
      <Box>
        <Flex direction="column">
          {projectCredits.map((credit, key) => (
            <Flex key={key}>
              <Heading {...styles.projectCredits.bold}>{credit.credit.person}</Heading>
              <Heading {...styles.projectCredits.regular}>・</Heading>
              <Heading {...styles.projectCredits.regular}>{credit.credit.role}</Heading>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

ProjectInfo.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectSpecs: PropTypes.array.isRequired,
  projectCredits: PropTypes.array.isRequired,
};

export default ProjectInfo;
