import React from "react";
import Link from "next/link";
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./styles";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';

const MenuMobile = ({ isIndex }) => {
  const router = useRouter();

  let menuMobileStyles = {...styles};

  if (isIndex) {

    menuMobileStyles.accordionContainer = {
      position: "absolute",
      zIndex: 50,
      width: "100%"
    };

  }

  return (
    <>
      <Accordion {...menuMobileStyles.accordionContainer} allowToggle>
        <AccordionItem {...menuMobileStyles.accordionItem}>
          <AccordionButton {...menuMobileStyles.accordionButton}>
            <Flex {...menuMobileStyles.accordionButtonContainer}>
              <Heading {...menuMobileStyles.heading}>ANDRÉS JURADO</Heading>
              <HamburgerIcon {...menuMobileStyles.hamburgerIcon} />
            </Flex>
          </AccordionButton>
          <AccordionPanel {...menuMobileStyles.accordionPanel}>
            <Link href="/bio">
              <Heading {...menuMobileStyles.headingMenu}>bio</Heading>
            </Link>
            <Link href="/">
              <Heading {...menuMobileStyles.headingMenu}>
                {router.locale === "en" ? "works" : "obras"}
              </Heading>
            </Link>
            <Flex>
              <Link href={router.asPath} locale="en">
                <Heading {...menuMobileStyles.headingMenuLanguage}>en</Heading>
              </Link>
              <Link href={router.asPath} locale="es">
                <Heading {...menuMobileStyles.headingMenuLanguage}>es</Heading>
              </Link>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

MenuMobile.propTypes = {
  isIndex: PropTypes.bool.isRequired
};

export default MenuMobile;
