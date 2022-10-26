import React from "react";
import Link from "next/link";
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./styles";
import { useRouter } from "next/router";

const MenuMobile = () => {
  const router = useRouter();

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem {...styles.accordionItem}>
          <AccordionButton {...styles.accordionButton}>
            <Flex {...styles.accordionButtonContainer}>
              <Heading {...styles.heading}>ANDRÉS JURADO</Heading>
              <HamburgerIcon {...styles.hamburgerIcon} />
            </Flex>
          </AccordionButton>
          <AccordionPanel {...styles.accordionPanel}>
            <Link href="/bio">
              <Heading {...styles.headingMenu}>bio</Heading>
            </Link>
            <Link href="/">
              <Heading {...styles.headingMenu}>
                {router.locale === "en" ? "works" : "obras"}
              </Heading>
            </Link>
            <Flex>
              <Link href={router.asPath} locale="en">
                <Heading {...styles.headingMenuLanguage}>en</Heading>
              </Link>
              <Link href={router.asPath} locale="es">
                <Heading {...styles.headingMenuLanguage}>es</Heading>
              </Link>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default MenuMobile;
