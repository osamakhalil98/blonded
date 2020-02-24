import { random } from './math';

export const randomColor = () => {
  const redComponent = random(0, 255);
  const greenComponent = random(0, 255);
  const blueComponent = random(0, 255);

  return `rgb(${redComponent},${greenComponent},${blueComponent})`;
};
