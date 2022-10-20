import React from "react";
import PropTypes from "prop-types";
import TextBlock from "../../Blocks/TextBlock";
import CarouselBlock from "../../Blocks/CarouselBlock";
import ImageBlock from "../../Blocks/ImageBlock";
import TitleBlock from "../../Blocks/TitleBlock";
import VimeoBlock from "../../Blocks/VimeoBlock";
import LinksBlock from "../../Blocks/LinksBlock";

const blocks = {
  textBlock: TextBlock,
  carouselBlock: CarouselBlock,
  imageBlock: ImageBlock,
  titleBlock: TitleBlock,
  vimeoBlock: VimeoBlock,
  linksBlock: LinksBlock
};

const PageContent = ({ pageContent }) => {
  return pageContent.map((content, key) => {
    const Component = blocks[content.type];
    return <Component blockContent={content} key={key} />;
  });
};

PageContent.propTypes = {
  pageContent: PropTypes.array.isRequired,
};

export default PageContent;
