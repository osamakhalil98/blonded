import { random } from "./math";

export const randomColor = () => {
  const redComponent = random(0, 255);
  const greenComponent = random(0, 255);
  const blueComponent = random(0, 255);

  return `rgb(${redComponent},${greenComponent},${blueComponent})`;
};

const brightColors = [
  "blue",
  "lightblue",
  "green",
  "yellow",
  "pink",
  "crimson",
  "purple",
];

export const randomBrightGradient = () => {
  const color1 = brightColors[random(0, brightColors.length - 1)];
  const color2 = brightColors[random(0, brightColors.length - 1)];

  return `linear-gradient(to right, ${color1}, ${color2})`;
};
