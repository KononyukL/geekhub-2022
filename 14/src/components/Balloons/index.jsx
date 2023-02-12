import React, { memo } from 'react';
import Balloon from '../Balloon';

const Balloons = ({ balloons }) => {
  return (
    <>
      {balloons.map((item) => {
        if (!item.popped) {
          return <Balloon key={item.id} id={item.id} color={item.color} />;
        }
        return null;
      })}
    </>
  );
};

export default memo(Balloons);
