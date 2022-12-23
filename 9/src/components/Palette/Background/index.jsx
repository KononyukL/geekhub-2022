import React from 'react';
import './style.css'

const Background = ({currentRgb, onChangeColor}) => {
  return (
    <div
      onClick={onChangeColor}
      className='background'
      style={{background: `rgb(${currentRgb.red}, ${currentRgb.green}, ${currentRgb.blue})`}}
    />
  );
};

export default Background;