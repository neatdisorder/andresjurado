import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import styles from './styles';

const TextBlock = ({ blockContent }) => {

  return (
    <Text {...styles.textComponent}>
        {blockContent.text}
    </Text>
  )

}

TextBlock.propTypes = {
    blockContent: PropTypes.object.isRequired
};

export default TextBlock;