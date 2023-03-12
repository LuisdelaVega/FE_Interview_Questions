export function sortedSquares(nums: number[]): number[] {
  const result = nums.map((value) => value * value);

  if (nums[0] >= 0) {
    return result;
  }

  return result.sort((a, b) => a - b);
}

export function sortedSquaresAlt(nums: number[]): number[] {
  const squaredValues = nums.map((value) => value * value);

  if (nums[0] >= 0) {
    return squaredValues;
  }

  const indexOffirstPositiveValue = nums.findIndex((value) => value >= 0);

  const decreasingValues = squaredValues.slice(0, indexOffirstPositiveValue);
  const increasingValues = squaredValues.slice(indexOffirstPositiveValue);

  const result: number[] = [];

  let forwardIndex = 0;
  let backwardsIndex = decreasingValues.length - 1;

  /**
   * result -> []
   * forwardIndex -> 0
   *                     👇
   * increasingValues -> [4, 9, 121]
   * backwardsIndex -> 1
   *                         👇
   * decreasingValues -> [49, 9]
   * increasingValue -> 4
   * decreasingValue -> 9
   *
   * IF increasingValue {4} < decreasingValue {9} -> YES
   *    result.push(increasingValue {4}) -> [4]
   *    forwardIndex++ -> 1
   *
   * result -> [4]
   * forwardIndex -> 1
   *                        👇
   * increasingValues -> [4, 9, 121]
   * backwardsIndex -> 1
   *                         👇
   * decreasingValues -> [49, 9]
   * increasingValue -> 9
   * decreasingValue -> 9
   *
   * IF increasingValue {9} < decreasingValue {9} -> NO
   * ELSE
   *    result.push(decreasingValue {9}) -> [4, 9]
   *    backwardsIndex-- -> 0
   *
   * result -> [4, 9]
   * forwardIndex -> 1
   *                        👇
   * increasingValues -> [4, 9, 121]
   * backwardsIndex -> 0
   *                     👇
   * decreasingValues -> [49, 9]
   * increasingValue -> 9
   * decreasingValue -> 49
   *
   * IF increasingValue {9} < decreasingValue {49} -> YES
   *    result.push(increasingValue {4}) -> [4, 9, 9]
   *    forwardIndex++ -> 2
   *
   * result -> [4, 9, 9]
   * forwardIndex -> 2
   *                            👇
   * increasingValues -> [4, 9, 121]
   * backwardsIndex -> 0
   *                     👇
   * decreasingValues -> [49, 9]
   * increasingValue -> 121
   * decreasingValue -> 49
   *
   * IF increasingValue {121} < decreasingValue {49} -> NO
   * ELSE
   *    result.push(decreasingValue {49}) -> [4, 9, 9, 49]
   *    backwardsIndex-- -> -1
   *
   * result -> [4, 9, 9, 49]
   * forwardIndex -> 2
   *                            👇
   * increasingValues -> [4, 9, 121]
   * backwardsIndex -> 0
   *                  👇
   * decreasingValues -> [49, 9]
   * increasingValue -> 121
   * decreasingValue -> undefined
   *
   * IF increasingValue {121} < decreasingValue {49} -> NO
   * ELSE
   *    result.push(decreasingValue {49}) -> [4, 9, 9, 49]
   *    backwardsIndex-- -> -1
   */
  while (result.length < increasingValues.length + decreasingValues.length) {
    const increasingValue = increasingValues[forwardIndex];
    const decreasingValue = decreasingValues[backwardsIndex];

    if (increasingValue < decreasingValue || backwardsIndex < 0) {
      result.push(increasingValue);
      forwardIndex++;
    } else if (
      increasingValue >= decreasingValue ||
      forwardIndex >= increasingValues.length
    ) {
      result.push(decreasingValue);
      backwardsIndex--;
    }
  }

  return result;
}
