import React from 'react';
import './style.css'

const AverageColor = ({red, green, blue}) => {
  return (
    <div className='container'>
      <p className='text'>The average color is: rgb{`(${red}, ${green}, ${blue})`}</p>
      <div className='color' style={{background: `rgb(${red}, ${green}, ${blue})`}}/>
    </div>
  );
};

export default AverageColor;