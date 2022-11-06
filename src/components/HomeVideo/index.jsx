import React from "react";
import PropTypes from "prop-types";
import { AspectRatio, Box } from "@chakra-ui/react";
import styles from "./styles";

const HomeVideo = ({ src }) => {
  return (
    <AspectRatio {...styles.videoContainer}>
      <Box as="video" src={src} autoPlay muted loop></Box>
    </AspectRatio>
  );
};

HomeVideo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default HomeVideo;
