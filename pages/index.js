import React from "react";
import Menu from "../src/components/Menu";
import WorksList from "../src/components/WorksList";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const index = ({ menuData, menuProjects }) => {
  return (
    <>
      <Menu menuCategories={menuData.categoriesList} />
      <WorksList menuProjects={menuProjects} />
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

  const menuProjectsRaw = matter(
    fs.readFileSync(settingsDirectory + "/general-content.md", "utf8")
  );

  const menuProjects =
    context.locale === "en"
      ? menuProjectsRaw.data.projectOrderEN
      : menuProjectsRaw.data.projectOrderES;

  return {
    props: { menuData, menuProjects },
  };
}

export default index;
