import React from 'react';
import { Ball, Container, Ellipsis } from './styled';

const Loader = ({ variant = 'white' }) => {
  return (
    <Container>
      <Ellipsis>
        <Ball variant={variant} />
        <Ball variant={variant} />
        <Ball variant={variant} />
        <Ball variant={variant} />
      </Ellipsis>
    </Container>
  );
};

export default Loader;
