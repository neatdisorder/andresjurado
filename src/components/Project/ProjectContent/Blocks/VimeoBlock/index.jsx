import React from "react";
import PropTypes from "prop-types";
import Vimeo from "@u-wave/react-vimeo";
import { Box } from "@chakra-ui/react";
import styles from "./styles";

const VimeoBlock = ({ blockContent }) => {
  return (
    <Box {...styles.vimeoContainer}>
      <Vimeo video={blockContent.id} responsive={true} />
    </Box>
  );
};

VimeoBlock.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default VimeoBlock;
