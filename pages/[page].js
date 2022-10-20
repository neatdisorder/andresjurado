import React from "react";
import Menu from "../src/components/Menu";
import Page from "../src/components/Page";
import Footer from "../src/components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const page = ({ pageData, footerText }) => {
  return (
    <>
      <Menu />
      <Page pageData={pageData} />
      <Footer footerText={footerText} />
    </>
  );
};

export default page;

export async function getStaticProps(context) {
  // Traer la información del proyecto

  const pageName = context.params.page;

  const pageDirectory = path.join(process.cwd(), "content/" + context.locale);

  const pageContent = matter(
    fs.readFileSync(pageDirectory + "/" + pageName + ".md", "utf8")
  );

  const pageData = pageContent.data;

  // Traer la información del footer

  const settingsDirectory = path.join(process.cwd(), "settings");
  const footerContent = matter(
    fs.readFileSync(settingsDirectory + "/general-content.md", "utf8")
  );

  const footerText = footerContent.data.pageFooter;

  // Devolver props

  return {
    props: { pageData, footerText },
  };
}

export async function getStaticPaths() {
  return {
    // WIP: Estas rutas tienen que actualizarse con todos los archivos que haya de MD en cada build.
    paths: [
      { params: { page: "bio" }, locale: "en" },
      { params: { page: "bio" }, locale: "es" },
    ],
    fallback: false,
  };
}
