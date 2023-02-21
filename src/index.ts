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
  logPairs
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
Do not use built in reverse capabilities.
*/

// #region YOUR CODE HERE
// #endregion

console.log(reverseString('FE Interview Questions'));

console.log('--- Problem #7 ---');
/*
Write a function that logs all the possible unique pairs of the values in the given array.
*/

const problem7Array = ['a', 'b', 'c', 'd', 'e'];

logPairs<string>(problem7Array);

setTimeout(() => {
  console.log('--- Timeout Problem #1 ---');
}, 900);
/*
Closure gotcha questions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
https://stackoverflow.com/questions/44606868/difference-between-let-and-var-inside-settimeout
https://stackoverflow.com/questions/111102/how-do-javascript-closures-work
*/

for (var var1 = 0; var1 < 3; var1++) {
  setTimeout(() => {
    // 1. Guess what value(s) will be logged by the line below 👇
    // console.log('var1', var1);
  }, 1000);
}

for (let let1 = 0; let1 < 3; let1++) {
  setTimeout(() => {
    // 2. Guess what value(s) will be logged by the line below 👇
    // console.log('let1', let1);
  }, 1000);
}

// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
for (var var2 = 0; var2 < 3; var2++) {
  (function (var2) {
    setTimeout(() => {
      // 3. Guess what value(s) will be logged by the line below 👇
      // console.log('var2', var2);
    }, 1000);
  })(var2);
}
