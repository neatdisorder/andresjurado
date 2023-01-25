const styles = {
  accordionItem: {
    border: "none",
  },
  accordionButton: {
    padding: 0,
  },
  accordionButtonContainer: {
    width: "100%",
    padding: "20px",
    display: "flex",
    justify: "space-between",
    align: "center",
  },
  heading: {
    fontSize: "29px",
    fontWeight: "400",
    textAlign: "left",
  },
  hamburgerIcon: {
    boxSize: "29px",
  },
  accordionPanel: {
    paddingTop: 0,
    paddingBottom: "20px",
    px: "20px",
  },
  headingMenu: {
    fontSize: "22px",
    fontWeight: "400",
    cursor: "pointer",
  },
  headingMenuLanguage: {
    fontSize: "22px",
    fontWeight: "400",
    cursor: "pointer",
    _after: {
      content: "'・'",
    },
    _last: {
      _after: {
        content: "''",
      },
    },
  },
};

export default styles;
