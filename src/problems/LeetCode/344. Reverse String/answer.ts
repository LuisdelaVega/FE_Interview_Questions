export function reverseString(s: string[]): void {
  if (s.length <= 1) {
    return;
  }

  const midPoint = Math.ceil(s.length / 2);

  for (let forwardIndex = 0; forwardIndex < midPoint; forwardIndex++) {
    const backwardsIndex = s.length - 1 - forwardIndex;
    const leftSideChar = s[forwardIndex];
    const rightSideChar = s[backwardsIndex];

    s[forwardIndex] = rightSideChar;
    s[backwardsIndex] = leftSideChar;
  }
}

export function reverseStringAlt(s: string[]): void {
  s.reverse();
}

// For when you are given an actual string instead of a string[]
/**
 * This solution is for when they expicitly ask you not to use
 * any built in array methods.
 */
export const reverseActualString = (str: string) => {
  if (!str) return str;

  const strArray = str.split('');
  const midPoint = Math.ceil(strArray.length / 2);

  for (
    let forwardIndex = 0, backwardsIndex = strArray.length - 1;
    forwardIndex < midPoint;
    forwardIndex++, backwardsIndex--
  ) {
    // The most common way is to declare this here 👇
    // const backwardsIndex = strArray.length - forwardMovingIndex - 1;
    const tempChar = strArray[backwardsIndex];
    strArray[backwardsIndex] = strArray[forwardIndex];
    strArray[forwardIndex] = tempChar;
  }

  return strArray.join('');
};

export const reverseActualStringWithArrSort = (str: string) => {
  if (!str.length) return str;

  return str
    .split('')
    .sort(() => 1)
    .join('');
};
