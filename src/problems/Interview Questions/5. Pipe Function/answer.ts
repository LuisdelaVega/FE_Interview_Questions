export const pipe =
  (...rest: ((x: any) => any)[]) =>
  (value: any) => {
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
