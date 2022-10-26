import React from "react";
import PropTypes from "prop-types";
import { AspectRatio, Box } from "@chakra-ui/react";

const HomeVideo = ({ src }) => {
  return (
    <AspectRatio
      maxHeight={{ base: "50vh", md: "65vh" }}
      ratio={{ base: 1/1, md: 16/9 }}
    >
      <Box as="video" src={src} autoplay="autoplay" muted loop></Box>
    </AspectRatio>
  );
};

HomeVideo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default HomeVideo;
