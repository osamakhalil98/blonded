import { random } from './math';

export const randomIndex = arrayLength => {
  return random(0, arrayLength - 1);
};
