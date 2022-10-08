import React from "react";
import Menu from '../../../src/components/Menu';

const project = ({ projectName }) => {

  console.log(projectName);

  return (
    <>
      <Menu />
      <Project />
    </>
  )
};

export default project;

export async function getServerSideProps(context) {
  const projectName = context.params.project;

  return {
    props: { projectName },
  };
}
