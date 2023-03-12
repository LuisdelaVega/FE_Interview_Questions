import { duplicate, revDuplicate } from './answer';

const question = () => {
  console.log('--- Problem #1: Array Duplication ---');
  /*
  1. Write a function that takes in an array and duplicates it

  When given the following input: `[1, 2, 3, 6, 4, 5]`
  the output must be `[1, 2, 3, 6, 4, 5, 1, 2, 3, 6, 4, 5]`
  */

  const problem1Array = [1, 2, 3, 6, 4, 5];

  // #region YOUR CODE HERE
  // #endregion

  console.log('Actual', duplicate<number>(problem1Array));
  console.log('Expected:', [1, 2, 3, 6, 4, 5, 1, 2, 3, 6, 4, 5]);

  /*
  2. Now modify it so that the duplicated array is reversed.

  - input: `[1, 2, 3, 6, 4, 5]`
  - output: `[1, 2, 3, 6, 4, 5, 5, 4, 6, 3, 2, 1]`
  */

  // #region YOUR CODE HERE
  // #endregion

  console.log('Actual:', revDuplicate(problem1Array));
  console.log('Expected:', [1, 2, 3, 6, 4, 5, 5, 4, 6, 3, 2, 1]);
};

export default question;
