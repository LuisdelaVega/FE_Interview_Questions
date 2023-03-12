export const firstFactorial = (num: number): number => {
  if (num === 1) {
    return num;
  }

  const result = num * firstFactorial(num - 1);

  return result;
};
