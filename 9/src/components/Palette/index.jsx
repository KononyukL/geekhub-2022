import React, {useEffect, useState} from 'react';
import Background from "./Background";
import './style.css'
import {getRandomNumber} from "../../helpers";
import DominantColor from "./DominantColor";
import AverageColor from "./AverageColor";

const Palette  = () => {
 const [rgbColor, setRgbColor] = useState({ red: 127, green: 127, blue: 127 })
 const [averageColor, setAverageColor] = useState({ red: 0, green: 0, blue: 0 })
 const [click, setClick] = useState(1)


  useEffect(() => {
    const {red, green, blue} = averageColor
    const {red: rgbRed, green: rgbGreen, blue: rgbBlue} = rgbColor

    setAverageColor({
      red: rgbRed + red ,
      green: rgbGreen + green,
      blue: rgbBlue + blue,
    })
  }, [rgbColor])

  const getDominantColor = () => {
   const {red, green, blue} = rgbColor

    if (red > green + blue) {
      return  'Red'
    }
    if (green > red + blue) {
      return  'Green'
    }
    if (blue > red + green) {
      return 'Blue'
    }

    return 'All colors are equal'
  }

  const onChangeColor = () => {
    setClick((value) => value + 1)
    setRgbColor({
      red: getRandomNumber(0, 255),
      green: getRandomNumber(0, 255),
      blue: getRandomNumber(0, 255)
    })
  }

  const getAverageColor = (color) => Math.round(color / click)

  return (
    <div className='palette'>
      <Background currentRgb={rgbColor} onChangeColor={onChangeColor} />
      <AverageColor
        red={getAverageColor(averageColor.red)}
        green={getAverageColor(averageColor.green)}
        blue={getAverageColor(averageColor.blue)}
      />
      <DominantColor color={getDominantColor()}/>
    </div>
  );
};

export default Palette ;