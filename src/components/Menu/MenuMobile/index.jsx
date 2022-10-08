import React from "react";
// import { checkPropTypes } from 'prop-types';
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const MenuMobile = () => {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
        <AccordionButton>
          <Heading>ANDRÉS JURADO</Heading>
          <HamburgerIcon />
        </AccordionButton>
        <AccordionPanel>
            <Heading>
                works
            </Heading>
            <Heading>
                bio
            </Heading>
            <Heading>
                en・es
            </Heading>
        </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default MenuMobile;
