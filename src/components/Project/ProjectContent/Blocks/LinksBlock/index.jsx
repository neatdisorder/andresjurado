import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles";

const LinksBlock = ({ blockContent }) => {
  console.log(blockContent);

  return (
    <Box {...styles.linksContainer}>
      {blockContent.links.map((link, key) => {
        return (
          <Link href={link.link.url} key={key}>
            <Text as="a" {...styles.linkText}>
              {link.link.linkText}
            </Text>
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
