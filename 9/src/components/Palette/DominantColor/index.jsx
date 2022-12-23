import React from 'react';
import './style.css'

const DominantColor = ({color}) => {
  return (
    <p className='text' >
      Dominant color: {color}
    </p>
  );
};

export default DominantColor;