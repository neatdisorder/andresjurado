import React from "react";
import Menu from "../../src/components/Menu";
import Project from "../../src/components/Project";
import Footer from "../../src/components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const project = ({ menuData, projectData, footerText }) => {
  return (
    <>
      <Menu menuCategories={menuData.categoriesList} />
      <Project projectData={projectData} />
      <Footer footerText={footerText} />
    </>
  );
};

export default project;

export async function getStaticProps(context) {

  // LEER CATEGORIAS DESDE LA CONFIGURACION

  const menuDirectory = path.join(process.cwd(), "settings");

  const menuCategories = matter(
    fs.readFileSync(menuDirectory + "/categories.md", "utf8")
  );

  const menuData = menuCategories.data;

  // Traer la información del proyecto

  const projectName = context.params.project;

  const projectDirectory = path.join(process.cwd(), "content/" + context.locale + "/projects");

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
    props: { menuData, projectData, footerText },
  };
}

export async function getStaticPaths() {
  return {
    // WIP: Estas rutas tienen que actualizarse con todos los archivos que haya de MD en cada build.
    paths: [
      { params: { project: "yarokamena" }, locale: "en" },
      { params: { project: "yarokamena" }, locale: "es" },
    ],
    fallback: false,
  };
}
