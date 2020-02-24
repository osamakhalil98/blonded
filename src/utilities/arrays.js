import { random } from './math';

export const randomElement = list => {
  const randomIndex = random(0, list.length - 1);
  return list[randomIndex];
};
