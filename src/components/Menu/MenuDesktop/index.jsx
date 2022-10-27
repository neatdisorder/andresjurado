import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import styles from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const MenuDesktop = ({ menuCategories, isIndex, menuFilter }) => {
  const router = useRouter();

  if (isIndex) {
    styles.heading.fontSize = { md: "68px", lg: "90px" };
    styles.menuLinksHeading.fontSize = { md: "24px", lg: "32px" };
  }

  return (
    <Box {...styles.menuContainer}>
      <Box>
        <Heading {...styles.heading}>ANDRÉS JURADO</Heading>
      </Box>
      <Flex {...styles.menuLinksContainer}>
        <Link href={"/bio"}>
          <Heading {...styles.menuLinksHeading}>bio</Heading>
        </Link>
        <Heading {...styles.menuLinksSeparator}>&nbsp;/&nbsp;</Heading>
          <Heading {...styles.menuLinksHeading} onClick={() => menuFilter("")}>
            {router.locale === "en" ? "works" : "obras"}
          </Heading>
        {menuCategories.map((category, key) => {
          const categoryStyle = { ...styles.menuLinksCategories };

          categoryStyle.color = category.category.color;

          return (
            <Heading
              {...categoryStyle}
              onClick={() =>
                menuFilter(
                  router.locale === "en"
                    ? category.category.titleEN
                    : category.category.titleES,
                    category.category.color
                )
              }
              key={key}
            >
              {router.locale === "en"
                ? category.category.titleEN
                : category.category.titleES}
            </Heading>
          );
        })}
        <Heading {...styles.menuLinksSeparator}>&nbsp;/&nbsp;</Heading>
        <Link href={router.asPath} locale="en">
          <Heading {...styles.menuLinksHeading}>en</Heading>
        </Link>
        <Heading {...styles.menuLinksSeparator}>・</Heading>
        <Link href={router.asPath} locale="es">
          <Heading {...styles.menuLinksHeading}>es</Heading>
        </Link>
      </Flex>
    </Box>
  );
};

MenuDesktop.propTypes = {
  menuCategories: PropTypes.array.isRequired,
  isIndex: PropTypes.bool.isRequired,
  menuFilter: PropTypes.func.isRequired,
};

export default MenuDesktop;
