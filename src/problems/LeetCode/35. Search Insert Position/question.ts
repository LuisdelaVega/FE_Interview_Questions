const question = () => {
  console.log('--- LeetCode 35. Search Insert Position ---');
  /*
  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.

  

  Example 1:

  Input: nums = [1,3,5,6], target = 5
  Output: 2

  Example 2:

  Input: nums = [1,3,5,6], target = 2
  Output: 1

  Example 3:

  Input: nums = [1,3,5,6], target = 7
  Output: 4

  

  Constraints:

      1 <= nums.length <= 104
      -104 <= nums[i] <= 104
      nums contains distinct values sorted in ascending order.
      -104 <= target <= 104
  */
  const nums1 = [1, 3, 5, 6];
  const target1 = 5;
  const target2 = 2;
  const target3 = 7;
  const target4 = 0;
  const nums2 = [1, 3];
  const target5 = 4;
  const nums3 = [1, 2, 4, 6, 7];
  const target6 = 3;

  //#region YOUR CODE HERE
  /**
   * target -> 5
   * nums -> [1, 3, 4, 5, 6]
   * midPoint -> nums.lenght {5} / 2 floored -> 2
   * indexOf -> 0
   * valueAtMidPoint -> 4
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> NO
   * ELSE
   *    indexOf -> midPoint + 1 -> 3
   *    nums -> [midPoint + 1, nums.length) -> [5, 6]
   *
   * target -> 5
   * nums -> [5, 6]
   * midPoint -> nums.lenght {2} / 2 floored -> 1
   * indexOf -> 3
   * valueAtMidPoint -> 6
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> YES
   *    nums -> [0, midPoint) -> [5]
   *
   * target -> 5
   * nums -> [5]
   * midPoint -> nums.lenght {1} / 2 floored -> 0
   * indexOf -> 3
   * valueAtMidPoint -> 5
   * IF target === valueAtMidPoint -> YES
   *    return indexOf -> 3
   *
   *
   *
   *
   * target -> 5
   * nums -> [1, 2, 3, 4, 6]
   * midPoint -> nums.lenght {5} / 2 floored -> 2
   * indexOf -> 0
   * valueAtMidPoint -> 3
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> NO
   * ELSE
   *    indexOf -> midPoint + 1 -> 3
   *    nums -> [midPoint + 1, nums.length) -> [4, 6]
   *
   * target -> 5
   * nums -> [4, 6]
   * midPoint -> nums.lenght {2} / 2 floored -> 1
   * indexOf -> 3
   * valueAtMidPoint -> 6
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> YES
   *    nums -> [0, midPoint) -> [4]
   *
   * target -> 5
   * nums -> [4]
   * midPoint -> nums.lenght {1} / 2 floored -> 0
   * indexOf -> 3
   * valueAtMidPoint -> 4
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> NO
   * ELSE
   *    indexOf -> indexOf {3} + midPoint {0} + 1 -> 4
   *    nums -> [midPoint {0} + 1, nums.length) -> [6]
   *
   *
   *
   *
   * target -> 7
   * nums -> [1, 3, 5, 6]
   * midPoint -> nums.lenght {4} / 2 floored -> 2
   * indexOf -> 0
   * valueAtMidPoint -> 5
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> NO
   * ELSE
   *    indexOf -> indexOf {0} + midPoint {2} -> 2
   *    nums -> [midPoint, nums.length) -> [6]
   *
   * target -> 7
   * nums -> [5, 6]
   * midPoint -> nums.lenght {2} / 2 floored -> 1
   * indexOf -> 3
   * valueAtMidPoint -> 6
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> NO
   * ELSE
   *    indexOf -> indexOf {2} + midPoint {1} -> 3
   *    nums -> [midPoint + 1, nums.length) -> [6]
   *
   * Return indexOf {3} + 1 -> {4}
   *
   *
   *
   *
   *
   * target -> 4
   * nums -> [1, 3]
   * midPoint -> nums.lenght {2} / 2 floored -> 1
   * indexOf -> 0
   * valueAtMidPoint -> 3
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> NO
   * ELSE
   *    indexOf -> midPoint {1} + 1 -> 2
   *    nums -> [midPoint + 1, nums.length) -> [3]
   *
   * Return index
   *
   *
   *
   *
   * target -> 3
   * nums -> [1, 2, 4, 6, 7]
   * midPoint -> nums.lenght {5} / 2 floored -> 2
   * indexOf -> 0
   * valueAtMidPoint -> 4
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> YES
   *    nums -> [0, midPoint) -> [1, 2]
   *
   * target -> 3
   * nums -> [1, 2]
   * midPoint -> nums.lenght {2} / 2 floored -> 1
   * indexOf -> 0
   * valueAtMidPoint -> 2
   * IF target === valueAtMidPoint -> NO
   * IF target < valueAtMidPoint -> NO
   * ELSE
   *    indexOf -> midPoint {1} + 1 -> 2
   *    nums -> [midPoint + 1, nums.length) -> [2]
   *
   * Return index
   */
  function searchInsert(nums: number[], target: number): number {
    if (!nums.length) {
      return 1;
    }

    let numsCopy = [...nums];
    let indexOf = 0;

    while (numsCopy.length > 1) {
      const midPoint = Math.floor(numsCopy.length / 2);
      const valueAtMidPoint = numsCopy[midPoint];

      if (target === valueAtMidPoint) {
        return indexOf + midPoint;
      }

      if (target < valueAtMidPoint) {
        numsCopy = numsCopy.slice(0, midPoint);
      } else {
        indexOf += midPoint;
        numsCopy = numsCopy.slice(midPoint);
      }
    }

    if (target <= numsCopy[0]) {
      return indexOf;
    }

    return indexOf + 1;
  }
  //#endregion

  console.log('Actual:', searchInsert(nums1, target1));
  console.log('Expected:', 2);

  console.log('Actual:', searchInsert(nums1, target2));
  console.log('Expected:', 1);

  console.log('Actual:', searchInsert(nums1, target3));
  console.log('Expected:', 4);

  console.log('Actual:', searchInsert(nums1, target4));
  console.log('Expected:', 0);

  console.log('Actual:', searchInsert(nums2, target5));
  console.log('Expected:', 2);

  console.log('Actual:', searchInsert(nums3, target6));
  console.log('Expected:', 2);
};

export default question;
