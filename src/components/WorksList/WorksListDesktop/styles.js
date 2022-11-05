const styles = {
  projectsContainer: {
    px: { md: "58px", lg: "77px" },
    flexWrap: "wrap",
  },
  projectsHeading: {
    display: "inline",
    textTransform: "uppercase",
    fontWeight: "400",
    fontSize: { md: "36px", lg: "48px" },
    cursor: "pointer",
    _after: {
      content: "' / '",
      color: "white",
      cursor: "default",
      display: "inline-block",
      marginLeft: "0.25em",
      marginRight: "0.25em"
    },
    _last: {
      _after: {
        content: "''",
      },
    },
    _hover: {
      textDecoration: "underline",
      textDecorationThickness: "2px",
      textUnderlineOffset: "5px",
    }
  },
};

export default styles;
