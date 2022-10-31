import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import styles from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const MenuDesktop = ({ menuCategories, isIndex }) => {
  const router = useRouter();

  const headingStyles = isIndex
    ? { ...styles.headingIndex }
    : { ...styles.heading };

  return (
    <Box {...styles.menuContainer}>
      <Box>
        <Heading {...headingStyles}>ANDRÉS JURADO</Heading>
      </Box>
      <Flex {...styles.menuLinksContainer}>
        <Link href={"/bio"} passHref>
          <Heading {...styles.menuLinksHeading}>bio</Heading>
        </Link>
        <Heading {...styles.menuLinksSeparator}>&nbsp;/&nbsp;</Heading>
        <Link href={"/"} passHref>
          <Heading {...styles.menuLinksHeading}>
            {router.locale === "en" ? "works" : "obras"}
          </Heading>
        </Link>
        {menuCategories.map((category, key) => {
          const categoryStyle = { ...styles.menuLinksCategories };

          categoryStyle.color = category.category.color;

          return (
            <Link
              href={{
                pathname: "/works/[category]",
                query: {
                  category:
                    category.category.url
                },
              }}
              key={key}
              passHref
            >
              <Heading {...categoryStyle}>
                {router.locale === "en"
                  ? category.category.titleEN
                  : category.category.titleES}
              </Heading>
            </Link>
          );
        })}
        <Heading {...styles.menuLinksSeparator}>&nbsp;/&nbsp;</Heading>
        <Link href={router.asPath} locale="en" passHref>
          <Heading {...styles.menuLinksHeading}>en</Heading>
        </Link>
        <Heading {...styles.menuLinksSeparator}>・</Heading>
        <Link href={router.asPath} locale="es" passHref>
          <Heading {...styles.menuLinksHeading}>es</Heading>
        </Link>
      </Flex>
    </Box>
  );
};

MenuDesktop.propTypes = {
  menuCategories: PropTypes.array.isRequired,
  isIndex: PropTypes.bool.isRequired
};

export default MenuDesktop;
