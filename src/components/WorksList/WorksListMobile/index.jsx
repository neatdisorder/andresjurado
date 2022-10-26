import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import styles from "./styles";
import Link from "next/link";

const WorksListMobile = ({ menuCategories, menuProjects }) => {
  const router = useRouter();

  return menuCategories.map((category, key) =>
    router.locale === "en" ? (
      <Box key={key} {...styles.worksListContainer}>
        <Heading {...styles.categoryHeading}>
          {category.category.titleEN}
        </Heading>
        <Box>
          {menuProjects.map(
            (project, key) =>
              project.category[0] === category.category.titleEN && (
                <Link key={key} href={"/projects/" + project.filename}>
                  <Heading {...styles.projectHeading} color={category.category.color}>{project.title}</Heading>
                </Link>
              )
          )}
        </Box>
      </Box>
    ) : (
      <Box key={key} {...styles.worksListContainer}>
        <Heading {...styles.categoryHeading}>
          {category.category.titleES}
        </Heading>
        <Box {...styles.projectsContainer}>
          {menuProjects.map(
            (project, key) =>
              project.category[0] === category.category.titleES && (
                <Link key={key} href={"/projects/" + project.filename}>
                  <Heading {...styles.projectHeading} color={category.category.color}>{project.title}</Heading>
                </Link>
              )
          )}
        </Box>
      </Box>
    )
  );
};

WorksListMobile.propTypes = {
  menuProjects: PropTypes.array.isRequired,
  menuCategories: PropTypes.array.isRequired,
};

export default WorksListMobile;
