const styles = {
  boxContainer: {
    overflow: "hidden",
    marginBottom: { base: "25px", md: "38px", lg: "50px" },
  },
  slideContainer: {
    flex: { base: "0 0 100%", lg: "0 0 1200px" },
    flexDirection: "column",
    marginRight: { base: "0", lg: "35px" },
    _last: {
      marginRight: 0,
    },
  },
  captionContainer: {
    textAlign: "right",
    fontFamily: "Roboto, sans-serif",
    fontSize: { base: "12px", md: "13px", lg: "17px" },
    fontStyle: "italic",
    marginTop: "0.5em",
  },
};

export default styles;
