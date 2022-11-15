import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import styles from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const MenuDesktop = ({ menuCategories }) => {
  const router = useRouter();

  let isIndex = router.pathname === "/" || router.query.category !== "" ? true : false;

  return (
    <Box {...styles.menuContainer}>
      <Box>
        <Link href={"/"} passHref scroll={!isIndex}>
          <Heading {...styles.heading}>ANDRÉS JURADO</Heading>
        </Link>
      </Box>
      <Flex {...styles.menuLinksContainer}>
        {router.query.page === "bio" ? (
          <Link href={"/bio"} passHref>
            <Heading {...styles.menuLinksHeadingActive}>bio</Heading>
          </Link>
        ) : (
          <Link href={"/bio"} passHref>
            <Heading {...styles.menuLinksHeading}>bio</Heading>
          </Link>
        )}
        <Heading {...styles.menuLinksSeparator}>&nbsp;/&nbsp;</Heading>
        {router.pathname === "/" ? (
          <Link href={"/"} passHref scroll={!isIndex}>
            <Heading {...styles.menuLinksHeadingActive}>
              {router.locale === "en" ? "works" : "obras"}
            </Heading>
          </Link>
        ) : (
          <Link href={"/"} passHref scroll={!isIndex}>
            <Heading {...styles.menuLinksHeading}>
              {router.locale === "en" ? "works" : "obras"}
            </Heading>
          </Link>
        )}
        {menuCategories.map((category, key) => {
          const categoryStyle = { ...styles.menuLinksCategories };

          categoryStyle.color = category.category.color;

          const categoryStyleActive = { ...styles.menuLinksCategoriesActive };

          categoryStyleActive.color = category.category.color;

          return (
            <Link
              href={{
                pathname: "/works/[category]",
                query: {
                  category: category.category.url,
                },
              }}
              key={key}
              passHref
              scroll={!isIndex}
            >
              {router.query.category === category.category.url ? (
                <Heading {...categoryStyleActive}>
                  {router.locale === "en"
                    ? category.category.titleEN
                    : category.category.titleES}
                </Heading>
              ) : (
                <Heading {...categoryStyle}>
                  {router.locale === "en"
                    ? category.category.titleEN
                    : category.category.titleES}
                </Heading>
              )}
            </Link>
          );
        })}
        <Heading {...styles.menuLinksSeparator}>&nbsp;/&nbsp;</Heading>
        {router.locale === "en" ? (
          <>
            <Link href={router.asPath} locale="en" passHref scroll={false}>
              <Heading {...styles.menuLinksHeadingActive}>en</Heading>
            </Link>
            <Heading {...styles.menuLinksSeparator}>・</Heading>
            <Link href={router.asPath} locale="es" passHref scroll={false}>
              <Heading {...styles.menuLinksHeading}>es</Heading>
            </Link>
          </>
        ) : (
          <>
            <Link href={router.asPath} locale="en" passHref scroll={false}>
              <Heading {...styles.menuLinksHeading}>en</Heading>
            </Link>
            <Heading {...styles.menuLinksSeparator}>・</Heading>
            <Link href={router.asPath} locale="es" passHref scroll={false}>
              <Heading {...styles.menuLinksHeadingActive}>es</Heading>
            </Link>
          </>
        )}
      </Flex>
    </Box>
  );
};

MenuDesktop.propTypes = {
  menuCategories: PropTypes.array.isRequired,
};

export default MenuDesktop;
