import React from "react";
// import { checkPropTypes } from 'prop-types';
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from './styles';

const MenuMobile = () => {
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
            <Heading {...styles.headingMenu}>works</Heading>
            <Heading {...styles.headingMenu}>bio</Heading>
            <Heading {...styles.headingMenu}>en・es</Heading>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default MenuMobile;
