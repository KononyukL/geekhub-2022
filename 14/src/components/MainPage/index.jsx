import React, { useEffect, useState } from 'react';
import { balloonArr } from '../../helpers';
import Balloons from '../Balloons';
import ResultGame from '../ResultGame';
import { ContainerPage } from './styled';
import HeaderGame from '../HeaderGame';

const MainPage = () => {
  const [balloons, setBalloons] = useState(balloonArr);
  const [count, setCount] = useState(balloonArr.length);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, [1000]);

    if (!timer) {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timer]);

  const onPop = (event) => {
    const { id } = event.target;
    if (id) {
      setBalloons((balloons) => {
        const arr = [...balloons];
        arr[id].popped = true;
        return arr;
      });

      setCount((count) => count - 1);
    }
  };

  const showGame = () => {
    if (timer && count) {
      return <Balloons balloons={balloons} />;
    }

    if (!timer && count) {
      return <ResultGame>You lose!</ResultGame>;
    }

    if (!count) {
      return <ResultGame>You win!</ResultGame>;
    }
  };

  return (
    <ContainerPage onClick={onPop}>
      {count && timer ? <HeaderGame count={count} timer={timer} /> : null}
      {showGame()}
    </ContainerPage>
  );
};

export default MainPage;
