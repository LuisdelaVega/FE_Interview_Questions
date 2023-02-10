import { IAnimal } from './index';

// --- Answer to Problem #1 ---

// 1
export function duplicate<T>(param: T[]) {
  return param.concat(param);
}

export const duplicateAlt = <T>(param: T[]) => [...param, ...param];

// 2
export const revDuplicate = <T>(param: T[]) => {
  const arr = [...param]; // alternative -> param.slice(0);
  arr.reverse();

  return param.concat(arr);
};

export const revDuplicateAlt = <T>(param: T[]) => [
  ...param,
  ...[...param].reverse()
];

// --- Answer to Problem #2 ---

export function groupByKey<T>(param: T[], groupKey: keyof T) {
  return param.reduce((acc, currentValue) => {
    const dept = currentValue[groupKey];

    if (!acc[dept]) {
      acc[dept] = [currentValue];
    } else {
      acc[dept].push(currentValue);
    }

    return acc;
  }, {} as any);
}

// --- Answer to Problem #3 ---

export const firstFactorial = (num: number): number => {
  if (num === 1) {
    return num;
  }

  const result = num * firstFactorial(num - 1);

  return result;
};

// --- Answer to Problem #4 ---

export const howManyOfType = (data: IAnimal[]) => {
  return data.reduce((acc, currentVal) => {
    const { type } = currentVal;

    if (!acc[type]) {
      acc[type] = 1;
    } else {
      acc[type]++;
    }

    return acc;
  }, {} as any);
};

export const howManyHaveCollar = (data: IAnimal[]) => {
  return data.reduce((acc, currentVal) => {
    const { type, hasCollar } = currentVal;

    if (!acc[type] && hasCollar) {
      acc[type] = 1;
    } else if (acc[type] && hasCollar) {
      acc[type]++;
    }

    return acc;
  }, {} as any);
};

// --- Answer to Problem #5 ---

export const pipe = (...rest: ((x: any) => any)[]) => (value: any) => {
  return rest.reduce((acc, currVal) => {
    return currVal(acc);
  }, value);
};

export function pipeEs5() {
  const argArray: ((x: any) => any)[] = Array.from(arguments);

  return function (value: any) {
    return argArray.reduce(function (acc, currVal) {
      return currVal(acc);
    }, value);
  };
}

// --- Answer to Problem #6 ---

export const reverseString = (str: string) => {
  if (!str) return '';

  const strArray = str.split('');
  const midPoint = Math.ceil(strArray.length / 2);

  for (
    let forwardMovingIndex = 0, backwardsMovingIndex = strArray.length - 1;
    forwardMovingIndex < midPoint;
    forwardMovingIndex++, backwardsMovingIndex--
  ) {
    // The most common way is to declare this here 👇
    // const backwardsMovingIndex = strArray.length - forwardMovingIndex - 1;
    const charAtBackwardsMovingIndex = strArray[backwardsMovingIndex];
    strArray[backwardsMovingIndex] = strArray[forwardMovingIndex];
    strArray[forwardMovingIndex] = charAtBackwardsMovingIndex;
  }

  return strArray.join('');
};
