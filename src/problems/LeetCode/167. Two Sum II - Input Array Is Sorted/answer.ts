export function twoSum(numbers: number[], target: number): number[] {
  const numbersMap = numbers.reduce(
    (accumulator, currentValue, currentIndex) => {
      // Only keep the latest index if a number appears more than once
      // NOTE: Really only works if the number appears exactly twice
      accumulator[currentValue] = currentIndex;

      return accumulator;
    },
    {} as {
      [key: number]: number;
    }
  );

  const result: number[] = [];

  for (let index = 0; index < numbers.length; index++) {
    const value = numbers[index];
    const secondIndex = numbersMap[target - value];

    if (typeof secondIndex !== 'undefined') {
      result.push(index + 1);
      result.push(secondIndex + 1);
      break;
    }
  }

  return result.sort((a, b) => a - b);
}
