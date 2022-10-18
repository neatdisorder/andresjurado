import React from "react";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/react";
import styles from "./styles";

const TitleBlock = ({ blockContent }) => {
  return <Heading as="h2" {...styles.titleHeading}>{blockContent.title}</Heading>;
};

TitleBlock.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default TitleBlock;
