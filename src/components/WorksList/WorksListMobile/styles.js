const styles = {
    worksListContainer: {
        padding: "20px"
    },
    categoryHeading: {
        textTransform: "lowercase",
        fontWeight: "400",
        fontSize: "20px"
    },
    projectsContainer: {
        flexWrap: "wrap"
    },
    projectHeading: {
        textTransform: "uppercase",
        fontWeight: "400",
        fontSize: "20px",
        display: "inline",
        cursor: "pointer",
        _after: {
            content: "' / '",
            color: "white"
        },
        _last: {
            _after: {
                content: "''"
            }
        }
    }
};

export default styles;