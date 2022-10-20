import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import styles from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuDesktop = () => {

  const router = useRouter();

  console.log(router);

  console.log(router.pathname);

  return (
    <Box {...styles.menuContainer}>
      <Box>
        <Heading {...styles.heading}>ANDRÉS JURADO</Heading>
      </Box>
      <Flex {...styles.menuLinksContainer}>
        <Heading {...styles.menuLinksHeading}>bio</Heading>
        <Heading {...styles.menuLinksSeparator}>&nbsp;/&nbsp;</Heading>
        <Heading {...styles.menuLinksHeading}>obras</Heading>
        <Heading {...styles.menuLinksSeparator}>・</Heading>
        <Heading {...styles.menuLinksHeading}>performance</Heading>
        <Heading {...styles.menuLinksSeparator}>・</Heading>
        <Heading {...styles.menuLinksHeading}>film</Heading>
        <Heading {...styles.menuLinksSeparator}>・</Heading>
        <Heading {...styles.menuLinksHeading}>exhibición</Heading>
        <Heading {...styles.menuLinksSeparator}>・</Heading>
        <Heading {...styles.menuLinksHeading}>curaduría</Heading>
        <Heading {...styles.menuLinksSeparator}>・</Heading>
        <Heading {...styles.menuLinksHeading}>publicación</Heading>
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

export default MenuDesktop;
