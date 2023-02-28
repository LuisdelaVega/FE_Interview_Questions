// NOTE: Comment out these imports to add your own answers
import {
  duplicate,
  revDuplicate,
  groupByKey,
  firstFactorial,
  howManyOfType,
  howManyHaveCollar,
  pipe,
  pipeEs5,
  reverseString,
  logPairs,
  containsCommonValue,
  findPairWithSum,
  mergeSortedArrays,
  maxSubArray,
  moveZeroesAlt,
  containsDuplicate,
  rotate,
  MyArray,
  HashTable,
  firstRecurringCharacter,
  minimumJumps
} from './answers';

/**
 * CodeSandbox doesn't clear the console when it
 * re-renders. This makes the answers more readable.
 */
console.clear();

// Interview questions start below 👇

console.log('--- Problem #1 ---');
/*
1. Write a function that takes in an array and duplicates it

When given the following input: `[1, 2, 3, 6, 4, 5]`
the output must be `[1, 2, 3, 6, 4, 5, 1, 2, 3, 6, 4, 5]`
*/

const problem1Array = [1, 2, 3, 6, 4, 5];

// #region YOUR CODE HERE
// #endregion

console.log(duplicate<number>(problem1Array));

/*
2. Now modify it so that the duplicated array is reversed.

- input: `[1, 2, 3, 6, 4, 5]`
- output: `[1, 2, 3, 6, 4, 5, 5, 4, 6, 3, 2, 1]`
*/

// #region YOUR CODE HERE
// #endregion

console.log(revDuplicate(problem1Array));

console.log('--- Problem #2 ---');
/*
Write a function that groups an array of objects by a specified key

const input = [
  { name: 'Michael', department: 'Engineering' },
  { name: 'John', department: 'Engineering' },
  { name: 'Mark', department: 'Product' }
];

console.log(groupByKey(input, 'department'))
👇
{
  "Engineering": [
      { "name": "Michael", "department": "Engineering"},
      { "name": "John", "department": "Engineering" }
  ],
  "Product": [
      { "name": "Mark", "department": "Product" }
  ]
}
*/

interface IUsers {
  name: string;
  department: string;
}

// #region YOUR CODE HERE
// #endregion

const users: IUsers[] = [
  { name: 'Michael', department: 'Engineering' },
  { name: 'John', department: 'Engineering' },
  { name: 'Mark', department: 'Product' },
  { name: 'Jack', department: 'HR' },
  { name: 'Jill', department: 'HR' },
  { name: 'Zach', department: 'HR' }
];

console.log(groupByKey<IUsers>(users, 'department'));

console.log('--- Problem #3 ---');
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

console.log(firstFactorial(8));

console.log('--- Problem #4 ---');
/*
1. Write a function that takes in the `data` array below 
and returns an object whose key value pair represent the
animal types and how many of each type of animal are in
the array.
*/

enum EAnimalType {
  dog = 'dog',
  cat = 'cat',
  bat = 'bat'
}

export type IAnimal = {
  type: EAnimalType;
  value: number;
  hasCollar?: boolean;
};

const animalData: IAnimal[] = [
  { type: EAnimalType.dog, value: 3, hasCollar: true },
  { type: EAnimalType.cat, value: 4, hasCollar: true },
  { type: EAnimalType.cat, value: 5, hasCollar: false },
  { type: EAnimalType.cat, value: 6, hasCollar: true },
  { type: EAnimalType.bat, value: 1 },
  { type: EAnimalType.bat, value: 2 }
];

// #region YOUR CODE HERE
// #endregion

console.log(howManyOfType(animalData));

/*
2. Now write a similar function but only show the ones
that have a collar.
*/

// #region YOUR CODE HERE
// #endregion

console.log(howManyHaveCollar(animalData));

console.log('--- Problem #5 ---');
/*
1. Write a function (pipe) that takes in any number of functions
and passes in the output of the previous one into the next one.
Repeat until all functions have executed and return the output.
*/

// const addThree = (x: number) => x + 3;
function addThree(value: number) {
  return value + 3;
}
const getSquareValue = (value: number) => value * value;

// #region YOUR CODE HERE
// #endregion

const addThreeThenSquare = pipe(addThree, getSquareValue);
console.log(addThreeThenSquare(6));

/*
2. (Optional) Can you write it as a function with a signature that
has no required arguments. Like so:

```
function pipeEs5() {
  // YOUR CODE HERE
}
```
*/

// #region YOUR CODE HERE
// #endregion

// @ts-expect-error
const addThreeThenSquareEs5 = pipeEs5(addThree, getSquareValue);
console.log(addThreeThenSquareEs5(6));

console.log('--- Problem #6 ---');
/*
Write a function that reverses a string from scratch.
Do not use built in reverse or sorting capabilities.
*/

// #region YOUR CODE HERE
// #endregion

console.log(reverseString('FE Interview Questions'));

console.log('--- Problem #7 ---');
/*
Write a function that logs all the possible unique pairs of the values in the given array.
*/

const problem7Array = ['a', 'b', 'c', 'd', 'e'];

// #region YOUR CODE HERE
// #endregion

logPairs<string>(problem7Array);

console.log('--- Problem #8 ---');
/*
Write a function that returns `true` if two arrays contain a common value.
*/

const problem8Array1: string[] = ['a', 'b', 'c', 'x'];
const problem8Array2: string[] = ['z', 'y', 'i'];
const problem8Array3: string[] = ['z', 'y', 'x'];

// #region YOUR CODE HERE
// #endregion

console.log(containsCommonValue(problem8Array1, problem8Array2)); // False
console.log(containsCommonValue(problem8Array1, problem8Array3)); // True

console.log('--- Problem #9 ---');
/*
Write a function that takes in an array of integers and an integer
then returns an array with 2 numbers from the input array that add to
the input integer. If no pair add up to the input integer, return an
empty array.
*/

const problem9Array1: number[] = [1, 2, 3, 9];
const problem9Array2: number[] = [1, 3, 2, 5];

// #region YOUR CODE HERE
// #endregion

console.log(findPairWithSum(problem9Array1, 8)); // []
console.log(findPairWithSum(problem9Array2, 8)); // [3, 5]

console.log('--- Problem #10 ---');
/*
Write a function that takes in two sorted arrays and returns an
array that contains all the values in the input arrays and it's
sorted.
*/

const problem10Array1: number[] = [0, 3, 4, 31];
const problem10Array2: number[] = [4, 6, 30];

// #region YOUR CODE HERE
// #endregion

console.log(
  [0, 3, 4, 4, 6, 30, 31],
  mergeSortedArrays(problem10Array1, problem10Array2)
);

console.log('--- Problem #11 ---');
/*
Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
*/

const problem11Array1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const problem11Array2 = [1];
const problem11Array3 = [5, 4, -1, 7, 8];

// #region YOUR CODE HERE
// #endregion

console.log(6, maxSubArray(problem11Array1));
console.log(1, maxSubArray(problem11Array2));
console.log(23, maxSubArray(problem11Array3));

console.log('--- Problem #12 ---');
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

*/

const problem12Array1 = [0, 1, 0, 3, 12];
const problem12Array2 = [0];
const problem12Array3 = [0, 0, 1];

// #region YOUR CODE HERE
// #endregion

moveZeroesAlt(problem12Array1);
console.log([1, 3, 12, 0, 0], problem12Array1);
moveZeroesAlt(problem12Array2);
console.log([0], problem12Array2);
moveZeroesAlt(problem12Array3);
console.log([1, 0, 0], problem12Array3);

console.log('--- Problem #13 ---');
/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
*/

const problem13Array1 = [1, 2, 3, 1];
const problem13Array2 = [1, 2, 3, 4];
const problem13Array3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

// #region YOUR CODE HERE
// #endregion

console.log(true, containsDuplicate(problem13Array1));
console.log(false, containsDuplicate(problem13Array2));
console.log(true, containsDuplicate(problem13Array3));

console.log('--- Problem #14 ---');
/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:

    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1
    0 <= k <= 105


Follow up:

    Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
    Could you do it in-place with O(1) extra space?
*/

const problem14Array1 = [1, 2, 3, 4, 5, 6, 7];
const problem14Array2 = [-1, -100, 3, 99];
const problem14Array3 = [1, 2];
const problem14Array4 = [1, 2];
const problem14Array5 = [1, 2, 3];

// #region YOUR CODE HERE
// #endregion

rotate(problem14Array1, 3);
console.log([5, 6, 7, 1, 2, 3, 4], problem14Array1);
rotate(problem14Array2, 2);
console.log([3, 99, -1, -100], problem14Array2);
rotate(problem14Array3, 3);
console.log([2, 1], problem14Array3);
rotate(problem14Array4, 2);
console.log([1, 2], problem14Array4);
rotate(problem14Array5, 4);
console.log([3, 1, 2], problem14Array5);

console.log('--- Problem #15 ---');
/*
Write a function that finds the first character that appears more
than once in an array.
*/

const problem15Array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const problem15Array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const problem15Array3 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
const problem15Array4 = [2, 3, 4, 5];

// #region YOUR CODE HERE
// #endregion

console.log(2, firstRecurringCharacter(problem15Array1));
console.log(1, firstRecurringCharacter(problem15Array2));
console.log(2, firstRecurringCharacter(problem15Array3));
console.log(undefined, firstRecurringCharacter(problem15Array4));

console.log('--- Problem #16 ---');
/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

    0 <= j <= nums[i] and
    i + j < n

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].


Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2


Constraints:

    1 <= nums.length <= 104
    0 <= nums[i] <= 1000
    It's guaranteed that you can reach nums[n - 1].
*/

const problem16Array1 = [2, 3, 1, 1, 4];
const problem16Array2 = [2, 3, 0, 1, 4];
const problem16Array3 = [2, 4, 4, 1, 3, 3, 1, 1, 1];
const problem16Array4 = [5, 1];

// #region YOUR CODE HERE
// #endregion

console.log(2, minimumJumps(problem16Array1));
console.log(2, minimumJumps(problem16Array2));
console.log(3, minimumJumps(problem16Array3));
console.log(1, minimumJumps(problem16Array4));

/* --- Data Structure implementations from scratch --- */

console.log('--- Array ---');
/*
Create your own Array class
*/

// #region YOUR CODE HERE
// #endregion

const myArray = new MyArray();
myArray.push('0');
myArray.push('1');
myArray.push('2');
myArray.push('3');
myArray.push('4');
myArray.push('5');

myArray.delete(2);
console.log(myArray);

console.log('--- Hash Table ---');
/*
Create your own Hash Table class
*/

// #region YOUR CODE HERE
// #endregion

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('grapes', 10009);
console.log(1009, myHashTable.get('grapes'));
console.log(9, myHashTable.get('apples'));
console.log(undefined, myHashTable.get('oranges'));
console.log(['grapes', 'apples'], myHashTable.keys());
console.log(myHashTable);

/* --- Closure gotcha questions --- */
setTimeout(() => {
  console.log('--- Closure Problems ---');
}, 900);

for (var var1 = 0; var1 < 3; var1++) {
  setTimeout(() => {
    // #1. Guess what value(s) will be logged by the line below 👇
    // console.log('var1', var1);
  }, 1000);
}

for (let let1 = 0; let1 < 3; let1++) {
  setTimeout(() => {
    // #2. Guess what value(s) will be logged by the line below 👇
    // console.log('let1', let1);
  }, 1000);
}

for (var var2 = 0; var2 < 3; var2++) {
  (function (var2) {
    setTimeout(() => {
      // #3. Guess what value(s) will be logged by the line below 👇
      // console.log('var2', var2);
    }, 1000);
  })(var2);
}

/*
Resources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
https://stackoverflow.com/questions/44606868/difference-between-let-and-var-inside-settimeout
https://stackoverflow.com/questions/111102/how-do-javascript-closures-work
https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/
