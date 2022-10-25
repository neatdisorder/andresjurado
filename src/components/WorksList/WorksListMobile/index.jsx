import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
// import styles from './styles';

const WorksListMobile = ({ menuCategories, menuProjects }) => {
  const router = useRouter();

  console.log(menuCategories);

  console.log(menuProjects);

  return menuCategories.map((category, key) => (
    // <Box key={key}>
    //   <Heading>
    //     {router.locale === "en"
    //       ? item.category.titleEN
    //       : item.category.titleES}
    //   </Heading>
    //   <Box>
    //     {menuProjects.map(
    //       (project, key) =>
    //         project.category[0] === item && (
    //           <Heading key={key}>{project.title}</Heading>
    //         )
    //     )}
    //   </Box>
    // </Box>

      router.locale === "en" ? (<Box key={key}>
        <Heading>
          {category.category.titleEN}
        </Heading>
        <Box>
          {menuProjects.map((project, key) => (project.category[0] === category.category.titleEN && <Heading key={key}>{project.title}</Heading>))}
        </Box>
      </Box>) : (<Box key={key}>
        <Heading>
          {category.category.titleES}
        </Heading>
        <Box>
          {menuProjects.map((project, key) => (project.category[0] === category.category.titleES && <Heading key={key}>{project.title}</Heading>))}
        </Box>
      </Box>)



  ));
};

WorksListMobile.propTypes = {
  menuProjects: PropTypes.array.isRequired,
  menuCategories: PropTypes.array.isRequired,
};

export default WorksListMobile;
