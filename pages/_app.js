import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PropTypes from 'prop-types';
import "@fontsource/mingzat";
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func
};

export default MyApp;
