import React from "react";
import HomeVideo from "../../src/components/HomeVideo";
import Menu from "../../src/components/Menu";
import WorksList from "../../src/components/WorksList";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const category = ({
  menuData,
  menuProjectOrder,
  projectData,
  pageCategory,
}) => {
  const includedProjects = {};

  for (const [key, value] of Object.entries(projectData)) {
    if (value.category.indexOf(pageCategory) >= 0) {
      includedProjects[key] = value;
    }
  }

  let currentCategoryColor = "";

  menuData.categoriesList.forEach((category) => {
    if (
      category.category.titleEN === pageCategory ||
      category.category.titleES === pageCategory
    ) {
      currentCategoryColor = category.category.color;
    }
  });

  Object.keys(includedProjects).map((objectKey) => {
    includedProjects[objectKey].color = currentCategoryColor;
  });

  return (
    <>
      <HomeVideo
        src={
          "https://res.cloudinary.com/dv2a9f43d/video/upload/q_auto:good/v1666804552/loop_bienvenidos_01_vjtwmw.mov"
        }
      />
      <Menu menuCategories={menuData.categoriesList} isIndex={true} />
      <WorksList
        menuCategories={menuData.categoriesList}
        menuProjectOrder={menuProjectOrder}
        projectData={includedProjects}
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

    // CONSEGUIR COLOR DE LA CATEGORIA PARA ENVIARLO AL OBJETO

    let categoryColorIndex =
      context.locale === "en"
        ? menuData.categoriesList.findIndex(
            (category) =>
              category.category.titleEN == objectData.data.category[0]
          )
        : menuData.categoriesList.findIndex(
            (category) =>
              category.category.titleES == objectData.data.category[0]
          );

    projectData[objectData.data.title] = {
      title: objectData.data.title,
      filename: file.replace(".md", ""),
      category: objectData.data.category,
      color: menuData.categoriesList[categoryColorIndex].category.color,
    };
  });

  const urlCategory = context.params.category;

  let pageCategory = "";

  menuData.categoriesList.forEach((category) => {
    if (category.category.url === urlCategory) {
      pageCategory =
        context.locale === "en"
          ? category.category.titleEN
          : category.category.titleES;
    }
  });

  return {
    props: { menuData, menuProjectOrder, projectData, pageCategory },
  };
}

export async function getStaticPaths() {
  const settingsDirectory = path.join(process.cwd(), "settings");

  const menuCategories = matter(
    fs.readFileSync(settingsDirectory + "/categories.md", "utf8")
  );

  const menuData = menuCategories.data;

  const returnPaths = [];

  menuData.categoriesList.forEach((item) =>
    returnPaths.push({ params: { category: item.category.url }, locale: "en" })
  );

  menuData.categoriesList.forEach((item) =>
    returnPaths.push({ params: { category: item.category.url }, locale: "es" })
  );

  return {
    paths: returnPaths,
    fallback: false,
  };
}

export default category;
