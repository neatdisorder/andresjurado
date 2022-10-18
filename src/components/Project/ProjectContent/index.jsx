import React from "react";
import PropTypes from "prop-types";
import TextBlock from "./Blocks/TextBlock";
import CarouselBlock from "./Blocks/CarouselBlock";
import ImageBlock from "./Blocks/ImageBlock";

const blocks = {
  textBlock: TextBlock,
  carouselBlock: CarouselBlock,
  imageBlock: ImageBlock
};

const ProjectContent = ({ projectContent }) => {
  return projectContent.map((content, key) => {
    const Component = blocks[content.type];
    return <Component blockContent={content} key={key} />;
  });
};

ProjectContent.propTypes = {
  projectContent: PropTypes.array.isRequired,
};

export default ProjectContent;
