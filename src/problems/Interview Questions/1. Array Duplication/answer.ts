export function duplicate<T>(param: T[]) {
  return param.concat(param);
}

export const duplicateAlt = <T>(param: T[]) => [...param, ...param];

// Part 2
export const revDuplicate = <T>(param: T[]) => {
  const arr = [...param]; // alternative -> param.slice(0);
  arr.reverse();

  return param.concat(arr);
};

export const revDuplicateAlt = <T>(param: T[]) => [
  ...param,
  ...[...param].reverse()
];
