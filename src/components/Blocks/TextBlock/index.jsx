import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import styles from './styles';
import { marked } from 'marked';

const TextBlock = ({ blockContent }) => {

  marked.setOptions({
    sanitize: true
  });

  return (
    <Box {...styles.textComponent} dangerouslySetInnerHTML={{__html: marked.parse(blockContent.text)}} />
  )

}

TextBlock.propTypes = {
    blockContent: PropTypes.object.isRequired
};

export default TextBlock;