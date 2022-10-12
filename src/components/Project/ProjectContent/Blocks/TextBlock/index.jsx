import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TextBlock = ({ blockContent }) => {

  console.log(blockContent);

  return (
    <Text>
        {blockContent.text}
    </Text>
  )
}

TextBlock.propTypes = {
    blockContent: PropTypes.object.isRequired
};

export default TextBlock;