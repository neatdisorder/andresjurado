import React from "react";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import PageContent from "./PageContent";
import styles from "./styles";

const Project = ({ pageData }) => {
  return (
    <Box {...styles.pageContainer}>
      <PageContent pageContent={pageData.content} />
    </Box>
  );
};

Project.propTypes = {
  pageData: PropTypes.object.isRequired,
};

export default Project;
