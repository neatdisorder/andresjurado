const styles = {
  worksListContainer: {
    padding: "20px",
    display: { base: "block", md: "none" },
  },
  categoryHeading: {
    textTransform: "lowercase",
    fontWeight: "400",
    fontSize: "20px",
  },
  projectHeading: {
    textTransform: "uppercase",
    fontWeight: "400",
    fontSize: "20px",
    display: "inline",
    cursor: "pointer",
    _after: {
      content: "' / '",
      color: "white",
    },
    _last: {
      _after: {
        content: "''",
      },
    },
  },
};

export default styles;
