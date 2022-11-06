import React from "react";
import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";
import styles from "./styles";

const Footer = ({ footerText }) => {
  return (
    <Heading as="h3" {...styles.footer}>
      {footerText}
    </Heading>
  );
};

Footer.propTypes = {
  footerText: PropTypes.string.isRequired,
};

export default Footer;
