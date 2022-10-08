import React from 'react';
import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Project = ({ projectData }) => {

  return (
    <Heading>
        {projectData.title}
    </Heading>
  )
}

Project.propTypes = {
    projectData: PropTypes.object.isRequired
}

export default Project;