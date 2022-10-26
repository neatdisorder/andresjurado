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
      cursor: "default"
    },
    _last: {
      _after: {
        content: "''",
      },
    },
  },
};

export default styles;
