import React from 'react';
import { Heading } from "@chakra-ui/react";

const project = ({ proyecto }) => {

    return (
        <Heading>
            { proyecto }
        </Heading>
    )

};

export default project;

export async function getServerSideProps(context) {

    const proyecto = context.params.project;

    return {
      props: {proyecto}, // will be passed to the page component as props
    }

  }  