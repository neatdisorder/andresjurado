import React from "react";
import WorksListDesktop from "./WorksListDesktop";
import WorksListMobile from "./WorksListMobile";
import { Show, Hide } from "@chakra-ui/react";
import PropTypes from "prop-types";

const WorksList = ({ menuCategories, menuProjectOrder, projectData }) => {
  const sortedProjects = [];

  menuProjectOrder.forEach((item) => {
    if (projectData[item]) {
      sortedProjects.push(projectData[item]);
    }
  });

  return (
    <>
      <Hide above="md">
        <WorksListMobile
          menuCategories={menuCategories}
          menuProjects={sortedProjects}
        />
      </Hide>
      <Show above="md">
        <WorksListDesktop menuProjects={sortedProjects} />
      </Show>
    </>
  );
};

WorksList.propTypes = {
  menuProjectOrder: PropTypes.array.isRequired,
  menuCategories: PropTypes.array.isRequired,
  projectData: PropTypes.object.isRequired,
};

export default WorksList;
