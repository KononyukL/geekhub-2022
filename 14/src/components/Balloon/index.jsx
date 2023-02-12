import React from 'react';
import { Container, StyledBalloon } from './styled';
import { getRandomArbitrary, getWindowDimensions } from '../../helpers';

const Balloon = ({ ...rest }) => {
  const { height, width } = getWindowDimensions();

  const left = getRandomArbitrary(60, width - 60);
  const top = getRandomArbitrary(70, height - 70);

  return (
    <Container left={left} top={top}>
      <StyledBalloon {...rest} />
    </Container>
  );
};

export default Balloon;
