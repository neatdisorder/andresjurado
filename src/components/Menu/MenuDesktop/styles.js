const styles = {
  menuContainer: {
    px: { md: "58px", lg: "77px" },
    py: { md: "38px", lg: "51px" },
  },
  heading: {
    fontSize: { md: "47px", lg: "63px" },
    fontWeight: "400",
  },
  headingIndex: {
    fontSize: { md: "68px", lg: "90px" },
    fontWeight: "400",
  },
  menuLinksContainer: {
    justifyContent: "space-between",
    width: { md: "908px", lg: "1200px" },
  },
  menuLinksHeading: {
    fontSize: { md: "23px", lg: "31px" },
    fontWeight: "400",
    cursor: "pointer",
    textTransform: "lowercase",
  },
  menuLinksHeadingIndex: {
    fontSize: { md: "24px", lg: "32px" },
    fontWeight: "400",
    cursor: "pointer",
    textTransform: "lowercase",
  },
  menuLinksCategories: {
    fontSize: { md: "23px", lg: "31px" },
    fontWeight: "400",
    cursor: "pointer",
    textTransform: "lowercase",
    _before: {
      content: "'・'",
      color: "white"
    },
    _last: {
      _after: {
        content: "''",
      },
    },
  },
  menuLinksSeparator: {
    fontSize: { md: "23px", lg: "31px" },
    fontWeight: "400",
  },
};

export default styles;
