import React from "react";
import Menu from "../src/components/Menu";
import WorksList from "../src/components/WorksList";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const index = ({ menuData }) => {

  return (
    <>
      <Menu menuCategories={menuData.categoriesList} />
      <WorksList />
    </>
  );
};

export async function getStaticProps() {
  // LEER CATEGORIAS DESDE LA CONFIGURACION

  const menuDirectory = path.join(process.cwd(), "settings");

  const menuCategories = matter(
    fs.readFileSync(menuDirectory + "/categories.md", "utf8")
  );

  const menuData = menuCategories.data;

  return {
    props: { menuData },
  };
}

export default index;
