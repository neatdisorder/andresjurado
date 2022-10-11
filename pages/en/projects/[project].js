import React from "react";
import Menu from "../../../src/components/Menu";
import Project from "../../../src/components/Project";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const project = ({ projectData }) => {
  return (
    <>
      <Menu />
      <Project projectData={projectData} />
    </>
  );
};

export default project;

export async function getStaticProps(context) {
  const projectName = context.params.project;
  const projectDirectory = path.join(process.cwd(), "content/en/projects");
  const projectContent = matter(
    fs.readFileSync(projectDirectory + "/" + projectName + ".md", "utf8")
  );

  const projectData = projectContent.data;

  return {
    props: { projectData },
  };
}

export async function getStaticPaths() {
  return {
    // WIP: Estas rutas tienen que actualizarse con todos los archivos que haya de MD en cada build.
    paths: ["/en/projects/yarokamena"],
    fallback: true,
  };
}
