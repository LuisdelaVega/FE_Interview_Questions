import { firstFactorial } from './answer';

const question = () => {
  console.log('--- Problem #3: First Factorial ---');
  /*
  First Factorial

  Have the function `FirstFactorial(num)` take the `num` parameter being passed and return the factorial of it.
  For example: if `num = 4`, then your program should return `(4 * 3 * 2 * 1) = 24`.
  The input will always be an integer.

  Examples:

  Input: 4
  Output: 24

  Input: 8
  Output: 40320
  */

  // #region YOUR CODE HERE
  // #endregion

  console.log('Actual:', firstFactorial(4));
  console.log('Expected:', 24);

  console.log('Actual:', firstFactorial(8));
  console.log('Expected:', 40320);
};

export default question;
