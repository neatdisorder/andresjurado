import React from "react";
import PropTypes from "prop-types";
import { Box, Link } from "@chakra-ui/react";
import styles from "./styles";

const LinksBlock = ({ blockContent }) => {
  return (
    <Box {...styles.linksContainer}>
      {blockContent.links.map((link, key) => {
        return (
          <Link {...styles.linkText} href={link.link.url} key={key} isExternal>
            {link.link.linkText}
          </Link>
        );
      })}
    </Box>
  );
};

LinksBlock.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default LinksBlock;
