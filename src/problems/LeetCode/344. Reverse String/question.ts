import { reverseString } from './answer';

const question = () => {
  console.log('--- LeetCode 344. Reverse String ---');
  /*
  Write a function that reverses a string. The input string is given as an array of characters s.

  You must do this by modifying the input array in-place with O(1) extra memory.

  

  Example 1:

  Input: s = ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]

  Example 2:

  Input: s = ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]

  

  Constraints:

      1 <= s.length <= 105
      s[i] is a printable ascii character.
  */

  //#region YOUR CODE HERE
  // function reverseString(s: string[]): void {}
  //#endregion

  const s1 = ['h', 'e', 'l', 'l', 'o'];
  const s2 = ['H', 'a', 'n', 'n', 'a', 'h'];

  reverseString(s1);
  reverseString(s2);

  console.log('Actual:', s1);
  console.log('Expected:', ['o', 'l', 'l', 'e', 'h']);

  console.log('Actual:', s2);
  console.log('Expected:', ['h', 'a', 'n', 'n', 'a', 'H']);
};

export default question;
