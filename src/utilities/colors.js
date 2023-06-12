import { random } from "./math";

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
