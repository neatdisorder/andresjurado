const styles = {
  projectInfoContainer: {
    width: { md: "908px", lg: "1200px" },
    marginBottom: { base: "40px", md: "56px", lg: "75px" },
  },
  projectNameHeading: {
    fontSize: { base: "23px", md: "30px", lg: "40px" },
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
  },
  specsContainer: {
    my: { base: "12px", md: "16px", lg: "21px" },
  },
  projectSpecs: {
    fontSize: { base: "12px", md: "17px", lg: "22px" },
    fontWeight: "400",
    textTransform: "uppercase",
    display: "inline",
    _after: {
      content: "'・'",
    },
    _last: {
      _after: {
        content: "''",
      },
    },
  },
  creditContainer: {
    flexWrap: "wrap",
  },
  projectCredits: {
    bold: {
      fontSize: { base: "11px", md: "15px", lg: "20px" },
      fontFamily: "Roboto, sans-serif",
      fontWeight: "bold",
      display: "inline",
      _after: {
        content: "'・'",
      },
    },
    regular: {
      fontSize: { base: "11px", md: "15px", lg: "20px" },
      fontFamily: "Roboto, sans-serif",
      fontWeight: "400",
      display: "inline",
      textTransform: "lowercase",
    },
  },
};

export default styles;
