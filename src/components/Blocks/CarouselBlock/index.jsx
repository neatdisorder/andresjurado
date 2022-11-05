import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "./styles";
import PropTypes from "prop-types";

const EmblaCarousel = ({ blockContent }) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
  });

  return (
    <Box className="embla" ref={emblaRef} {...styles.boxContainer}>
      <Flex className="embla__container">
        {blockContent.carouselList.map((slide, key) => {
          return (
            <Flex className="embla__slide" {...styles.slideContainer} key={key}>
              <Image
                src={
                  slide.slide.image + "-/crop/5:4/-/resize/1800x/-/format/webp/"
                }
              />
              {slide.slide.caption && (
                <Text {...styles.captionContainer}>{slide.slide.caption}</Text>
              )}
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

EmblaCarousel.propTypes = {
  blockContent: PropTypes.object.isRequired,
};

export default EmblaCarousel;
