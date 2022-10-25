import React from "react";
import Menu from "../src/components/Menu";
import WorksList from "../src/components/WorksList";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const index = ({ menuData, menuProjectOrder, projectData }) => {
  return (
    <>
      <Menu menuCategories={menuData.categoriesList} />
      <WorksList
        menuCategories={menuData.categoriesList}
        menuProjectOrder={menuProjectOrder}
        projectData={projectData}
      />
    </>
  );
};

export async function getStaticProps(context) {
  const settingsDirectory = path.join(process.cwd(), "settings");

  // LEER CATEGORIAS DESDE LA CONFIGURACION

  const menuCategories = matter(
    fs.readFileSync(settingsDirectory + "/categories.md", "utf8")
  );

  const menuData = menuCategories.data;

  // TRAER LISTADO DE PROYECTOS

  const menuProjectOrderRaw = matter(
    fs.readFileSync(settingsDirectory + "/general-content.md", "utf8")
  );

  const menuProjectOrder =
    context.locale === "en"
      ? menuProjectOrderRaw.data.projectOrderEN
      : menuProjectOrderRaw.data.projectOrderES;

  // TRAER TODOS LOS PROYECTOS COMPLETOS PARA ORDENARLOS POR CATEGORÍA

  const projectsDirectory = path.join(process.cwd(), "content");

  const projectFiles = fs.readdirSync(
    projectsDirectory + "/" + context.locale + "/projects"
  );

  const projectData = {};

  projectFiles.forEach((file) => {
    const objectData = matter(
      fs.readFileSync(
        projectsDirectory + "/" + context.locale + "/projects/" + file,
        "utf8"
      )
    );

    projectData[objectData.data.title] = {
      title: objectData.data.title,
      filename: file.replace(".md", ""),
      category: objectData.data.category,
    }
  });

  return {
    props: { menuData, menuProjectOrder, projectData },
  };
}

export default index;
