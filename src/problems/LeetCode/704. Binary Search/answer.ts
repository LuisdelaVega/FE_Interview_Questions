export function search(nums: number[], target: number): number {
  return nums.indexOf(target);
}

/**
 * Get the length of the nums array
 * With that length, get the midpoint
 * Compare the size of the value at the midpoint with target
 * IF target === value
 *    return index
 * ELSE IF target < value
 *    Get a sub-array from [0, midpoint)
 * ELSE
 *    Get a sub-array from [midpoint + 1, nums.length)
 * REPEAT until the array length is 1
 *
 *
 * Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * indexOf = -1
 * nums.length -> 6
 * midpoint -> 3
 * value at midpoint -> 5
 * IS target {9} === value at midpoint {5} -> NO
 * IS target {9} < value at midpoint {5} -> NO
 * ELSE
 *    new array -> [9, 12]
 *    indexOf -> midpoint {3} + 1 -> 4
 *
 * Input: nums = [9, 12], target = 9
 * nums.length -> 2
 * midpoint -> 1
 * value at midpoint -> 12
 * IS target {9} === value at midpoint {12} -> NO
 * IS target {9} < value at midpoint {12} -> YES
 *    new array -> [9]
 *
 * Input: nums = [9], target = 9
 * nums.length -> 1
 * midpoint -> 0
 * value at midpoint -> 9
 * IS target {9} === value at midpoint {9} -> YES
 *    return index
 *
 *
 *
 *
 * Get the length of the nums array
 * With that length, get the midpoint
 * Compare the size of the value at the midpoint with target
 * IF target === value
 *    return index
 * ELSE IF target < value
 *    Get a sub-array from [0, midpoint)
 * ELSE
 *    Get a sub-array from [midpoint + 1, nums.length)
 * REPEAT until the array length is 1
 *
 *
 * Input: nums = [-1, 0, 3, 5, 9, 12], target = 0
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * indexOf = -1
 * nums.length -> 6
 * midpoint -> 3
 * value at midpoint -> 5
 * IS target {0} === value at midpoint {5} -> NO
 * IS target {0} < value at midpoint {5} -> YES
 *    new array -> [-1, 0, 3]
 *    indexOf -> 0
 *
 * Input: nums = [-1, 0, 3], target = 0
 * nums.length -> 3
 * midpoint -> 1
 * value at midpoint -> 0
 * IS target {0} === value at midpoint {0} -> YES
 *    indexOf -> index {0} + midpoint {1} -> 1
 *    return indexOf
 *
 *
 * Input: nums = [-1, 0, 3, 5, 9, 12], target = 3
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * indexOf = -1
 * nums.length -> 6
 * midpoint -> 3
 * value at midpoint -> 5
 * IS target {3} === value at midpoint {5} -> NO
 * IS target {3} < value at midpoint {5} -> YES
 *    new array -> [-1, 0, 3]
 *    indexOf -> 0
 *
 * Input: nums = [-1, 0, 3], target = 0
 * nums.length -> 3
 * midpoint -> 1
 * value at midpoint -> 0
 * IS target {3} === value at midpoint {0} -> NO
 * IS target {3} < value at midpoint {0} -> NO
 * ELSE
 *    new array -> [3]
 *    indexOf -> midpoint {1} + 1 -> 2
 */
export function searchAlt(nums: number[], target: number): number {
  if (!nums.length || (nums.length === 1 && nums[0] !== target)) {
    return -1;
  }

  let indexOf = 0;
  let numsCopy = [...nums];

  do {
    const midpoint = Math.floor(numsCopy.length / 2);
    const valueAtMidpoint = numsCopy[midpoint];

    if (target === valueAtMidpoint) {
      return indexOf + midpoint;
    }

    if (target < valueAtMidpoint) {
      numsCopy = numsCopy.slice(0, midpoint);
    } else {
      numsCopy = numsCopy.slice(midpoint + 1);
      indexOf += midpoint + 1;
    }
  } while (numsCopy.length >= 1);

  return -1;
}
