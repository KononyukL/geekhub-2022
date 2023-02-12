import React from 'react';
import { GameWrap, Wrap } from './styled';

const HeaderGame = ({ count, timer }) => {
  return (
    <Wrap>
      <GameWrap>Count: {count}</GameWrap>
      <GameWrap> Timer: {timer}</GameWrap>
    </Wrap>
  );
};

export default HeaderGame;
