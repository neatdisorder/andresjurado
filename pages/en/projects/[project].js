import React from "react";
import Menu from "../../../src/components/Menu";
import Project from "../../../src/components/Project";
import Footer from "../../../src/components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const project = ({ projectData, footerText }) => {
  return (
    <>
      <Menu />
      <Project projectData={projectData} />
      <Footer footerText={footerText} />
    </>
  );
};

export default project;

export async function getStaticProps(context) {
  // Traer la información del proyecto

  const projectName = context.params.project;
  const projectDirectory = path.join(process.cwd(), "content/en/projects");
  const projectContent = matter(
    fs.readFileSync(projectDirectory + "/" + projectName + ".md", "utf8")
  );

  const projectData = projectContent.data;

  // Traer la información del footer

  const settingsDirectory = path.join(process.cwd(), "settings");
  const footerContent = matter(
    fs.readFileSync(settingsDirectory + "/general-content.md", "utf8")
  );

  const footerText = footerContent.data.pageFooter;

  // Devolver props

  return {
    props: { projectData, footerText },
  };
}

export async function getStaticPaths() {
  return {
    // WIP: Estas rutas tienen que actualizarse con todos los archivos que haya de MD en cada build.
    paths: ["/en/projects/yarokamena"],
    fallback: true,
  };
}
