const colors = ['red', 'green', 'blue'];
const generateColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

export const balloonArr = Array(30)
  .fill()
  .map((_, i) => ({ id: i, popped: false, color: generateColor() }));

export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
