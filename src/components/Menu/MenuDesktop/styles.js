const styles = {
  menuContainer: {
    px: { md: "58px", lg: "77px" },
    py: { md: "38px", lg: "51px" },
  },
  heading: {
    fontSize: { md: "47px", lg: "63px" },
    fontWeight: "400",
    cursor: "pointer",
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
    _hover: {
      textDecoration: "underline",
      textDecorationThickness: "2px",
      textUnderlineOffset: "5px",
    },
  },
  menuLinksCategories: {
    fontSize: { md: "23px", lg: "31px" },
    fontWeight: "400",
    textTransform: "lowercase",
    cursor: "pointer",
    _before: {
      content: "'・'",
      color: "white",
      display: "inline-block",
      cursor: "default",
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
    },
  },
  menuLinksSeparator: {
    fontSize: { md: "23px", lg: "31px" },
    fontWeight: "400",
  },
};

export default styles;
