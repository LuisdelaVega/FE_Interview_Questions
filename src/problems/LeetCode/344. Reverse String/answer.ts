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
