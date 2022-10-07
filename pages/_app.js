import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PropTypes from 'prop-types';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func
};

export default MyApp;
