import { moveZeroes } from './answer';

const question = () => {
  console.log('--- LeetCode 283. Move Zeroes ---');
  /*
  Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  Note that you must do this in-place without making a copy of the array.

  

  Example 1:

  Input: nums = [0,1,0,3,12]
  Output: [1,3,12,0,0]

  Example 2:

  Input: nums = [0]
  Output: [0]

  

  Constraints:

      1 <= nums.length <= 104
      -231 <= nums[i] <= 231 - 1

  
  Follow up: Could you minimize the total number of operations done?
  */

  //#region YOUR CODE HERE
  /**
   * Do not return anything, modify nums in-place instead.
   */
  // function moveZeroes(nums: number[]): void {}
  //#endregion

  const nums1 = [0, 1, 0, 3, 12];
  const nums2 = [0];

  moveZeroes(nums1);
  moveZeroes(nums2);

  console.log('Actual:', nums1);
  console.log('Expected:', [1, 3, 12, 0, 0]);

  console.log('Actual:', nums2);
  console.log('Expected:', [0]);
};

export default question;
