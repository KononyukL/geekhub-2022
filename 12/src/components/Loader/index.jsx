import React from 'react';
import { Ball, Container, Ellipsis } from './styled';

const Loader = () => {
  return (
    <Container>
      <Ellipsis>
        <Ball />
        <Ball />
        <Ball />
        <Ball />
      </Ellipsis>
    </Container>
  );
};

export default Loader;
