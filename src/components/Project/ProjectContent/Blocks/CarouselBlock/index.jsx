import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex, Image } from "@chakra-ui/react";
import styles from "./styles";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({align: "start"});

  return (
    <Box className="embla" ref={emblaRef} {...styles.boxContainer}>
      <Flex className="embla__container">
        <Flex className="embla__slide" {...styles.slideContainer}>
          <Image
            {...styles.images}
            src="/img/01_yarokamena_-gerardo_sueche_mambeando_for_yarokamena.png"
          />
        </Flex>
        <Flex className="embla__slide" {...styles.slideContainer}>
          <Image
            {...styles.images}
            src="/img/02_yarokamena_-antenna_parabolica3.png"
          />
        </Flex>
        <Flex className="embla__slide" {...styles.slideContainer}>
          <Image {...styles.images} src="/img/04_yarokamena_antenna.png" />
        </Flex>
        <Flex className="embla__slide" {...styles.slideContainer}>
          <Image
            {...styles.images}
            src="/img/05_yarokamena_-antenna_in_chorrera_amazonas.png"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default EmblaCarousel;
