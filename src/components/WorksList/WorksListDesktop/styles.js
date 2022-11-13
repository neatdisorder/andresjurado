const styles = {
  projectsContainer: {
    px: { md: "58px", lg: "77px" },
    flexWrap: "wrap",
    minHeight: { md: "40vh", lg: "50vh" },
  },
  projectsHeading: {
    display: "inline",
    textTransform: "uppercase",
    fontWeight: "400",
    fontSize: { md: "28px", lg: "40px" },
    cursor: "pointer",
    _after: {
      content: "' / '",
      color: "white",
      cursor: "default",
      display: "inline-block",
      marginLeft: "0.25em",
      marginRight: "0.25em",
    },
    _last: {
      _after: {
        content: "''",
      },
    },
    _hover: {
      color: "white",
      textDecoration: "underline",
      textDecorationThickness: "2px",
      textUnderlineOffset: "5px",
    },
  },
};

export default styles;
