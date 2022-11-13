import React from "react";
import Menu from "../src/components/Menu";
import Page from "../src/components/Page";
import Footer from "../src/components/Footer";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const page = ({ menuData, pageData, footerText, metaDescription }) => {
  return (
    <>
      <Head>
        <title>{`${pageData.title.toUpperCase()} | ANDRÉS JURADO`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Menu menuCategories={menuData.categoriesList} />
      <Page pageData={pageData} />
      <Footer footerText={footerText} />
    </>
  );
};

export default page;

export async function getStaticProps(context) {
  // LEER CATEGORIAS DESDE LA CONFIGURACION

  const settingsDirectory = path.join(process.cwd(), "settings");

  const menuCategories = matter(
    fs.readFileSync(settingsDirectory + "/categories.md", "utf8")
  );

  const menuData = menuCategories.data;

  // TRAER META DESCRIPTION

  const metaDescriptionRaw = matter(
    fs.readFileSync(settingsDirectory + "/general-content.md", "utf8")
  );

  const metaDescription =
    context.locale === "en"
      ? metaDescriptionRaw.data.metaDescriptionEN
      : metaDescriptionRaw.data.metaDescriptionES;

  // Traer la información de la página

  const pageName = context.params.page;

  const pageDirectory = path.join(process.cwd(), "content/" + context.locale);

  const pageContent = matter(
    fs.readFileSync(pageDirectory + "/" + pageName + ".md", "utf8")
  );

  const pageData = pageContent.data;

  // Traer la información del footer

  const footerContent = matter(
    fs.readFileSync(settingsDirectory + "/general-content.md", "utf8")
  );

  const footerText = footerContent.data.pageFooter;

  // Devolver props

  return {
    props: { menuData, pageData, footerText, metaDescription },
  };
}

export async function getStaticPaths() {
  const pagesDirectory = path.join(process.cwd(), "content");

  const pagesEN = fs.readdirSync(pagesDirectory + "/en");

  const pagesES = fs.readdirSync(pagesDirectory + "/es");

  const pagesENFilesOnly = pagesEN.filter((item) => item.includes(".md"));

  const pagesESFilesOnly = pagesES.filter((item) => item.includes(".md"));

  const pagesENClean = [];

  const pagesESClean = [];

  pagesENFilesOnly.forEach((item) =>
    pagesENClean.push(item.replace(".md", ""))
  );

  pagesESFilesOnly.forEach((item) =>
    pagesESClean.push(item.replace(".md", ""))
  );

  const returnPaths = [];

  pagesENClean.forEach((item) =>
    returnPaths.push({ params: { page: item }, locale: "en" })
  );

  pagesESClean.forEach((item) =>
    returnPaths.push({ params: { page: item }, locale: "es" })
  );

  return {
    paths: returnPaths,
    fallback: false,
  };
}
