import React from "react";
import { Box, Heading, Flex} from "@chakra-ui/react";
import styles from './styles';

const MenuDesktop = () => {
  return (
    <Box {...styles.menuContainer}>
      <Box>
        <Heading {...styles.heading}>ANDRÉS JURADO</Heading>
      </Box>
      <Flex {...styles.menuLinksContainer}>
        <Heading {...styles.menuLinksHeading}>bio</Heading>
        <Heading {...styles.menuLinksHeading}>&nbsp;/&nbsp;</Heading>
        <Heading {...styles.menuLinksHeading}>
          obras
        </Heading>
        <Heading {...styles.menuLinksHeading}>・</Heading>
        <Heading {...styles.menuLinksHeading}>
          performance
        </Heading>
        <Heading {...styles.menuLinksHeading}>・</Heading>
        <Heading {...styles.menuLinksHeading}>
          film
        </Heading>
        <Heading {...styles.menuLinksHeading}>・</Heading>
        <Heading {...styles.menuLinksHeading}>
          exhibición
        </Heading>
        <Heading {...styles.menuLinksHeading}>・</Heading>
        <Heading {...styles.menuLinksHeading}>
          curaduría
        </Heading>
        <Heading {...styles.menuLinksHeading}>・</Heading>
        <Heading {...styles.menuLinksHeading}>
          publicación
        </Heading>
        <Heading {...styles.menuLinksHeading}>&nbsp;/&nbsp;</Heading>
        <Heading {...styles.menuLinksHeading}>en</Heading>
        <Heading {...styles.menuLinksHeading}>・</Heading>
        <Heading {...styles.menuLinksHeading}>es</Heading>
      </Flex>
    </Box>
  );
};

export default MenuDesktop;
