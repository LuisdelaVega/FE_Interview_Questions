//#region Index

// NOTE: Comment out these imports to add your own answers
import {
  logPairs,
  containsCommonValue,
  findPairWithSum,
  mergeSortedArrays,
  maxSubArray,
  containsDuplicate,
  rotate,
  MyArray,
  HashTable,
  firstRecurringCharacter,
  minimumJumps,
  MyLinkedList,
  MyDoublyLinkedList,
  Stack,
  Queue,
  MyQueue,
  BST
} from './answers';

// LeetCode Questions
import binarySearch from './problems/LeetCode/704. Binary Search';
import firstBadVersion from './problems/LeetCode/278. First Bad Version';
import searchIndexPosition from './problems/LeetCode/35. Search Insert Position';
import squaresOfASortedArray from './problems/LeetCode/977. Squares of a Sorted Array';
import rotateArray from './problems/LeetCode/189. Rotate Array';
import reverseString from './problems/LeetCode/344. Reverse String';
import moveZeroes from './problems/LeetCode/283. Move Zeroes';
import twoSum from './problems/LeetCode/167. Two Sum II - Input Array Is Sorted';
import middleNode from './problems/LeetCode/876. Middle of the Linked List';
import removeNthFromEnd from './problems/LeetCode/19. Remove Nth Node From End of List';

// Interview Questions
import arayDuplication from './problems/Interview Questions/1. Array Duplication';
import groupObjectsByKey from './problems/Interview Questions/2. Group Objects by Key';
import firstFactorial from './problems/Interview Questions/3. First Factorial';
import groupObjectsByValue from './problems/Interview Questions/4. Group Objects by Value';
import pipe from './problems/Interview Questions/5. Pipe Function';

/**
 * Clear the console when it on a re-render.
 * This makes the console more readable.
 */
console.clear();

//#region LeetCode Questions
binarySearch();
firstBadVersion();
searchIndexPosition();
squaresOfASortedArray();
rotateArray();
reverseString();
moveZeroes();
twoSum();
middleNode();
removeNthFromEnd();
//#endregion LeetCode Questions

//#region Interview Questions
arayDuplication();
groupObjectsByKey();
firstFactorial();
groupObjectsByValue();
pipe();
//#endregion Interview Questions

console.log('--- Problem #7 ---');
/*
Write a function that logs all the possible unique pairs of the values in the given array.
*/

const problem7Array = ['a', 'b', 'c', 'd', 'e'];

//#region YOUR CODE HERE
//#endregion

logPairs<string>(problem7Array);

console.log('--- Problem #8 ---');
/*
Write a function that returns `true` if two arrays contain a common value.
*/

const problem8Array1: string[] = ['a', 'b', 'c', 'x'];
const problem8Array2: string[] = ['z', 'y', 'i'];
const problem8Array3: string[] = ['z', 'y', 'x'];

//#region YOUR CODE HERE
//#endregion

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

//#region YOUR CODE HERE
//#endregion

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

//#region YOUR CODE HERE
//#endregion

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

//#region YOUR CODE HERE
//#endregion

console.log(6, maxSubArray(problem11Array1));
console.log(1, maxSubArray(problem11Array2));
console.log(23, maxSubArray(problem11Array3));

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

//#region YOUR CODE HERE
//#endregion

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

//#region YOUR CODE HERE
//#endregion

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

//#region YOUR CODE HERE
//#endregion

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

//#region YOUR CODE HERE
//#endregion

console.log(2, minimumJumps(problem16Array1));
console.log(2, minimumJumps(problem16Array2));
console.log(3, minimumJumps(problem16Array3));
console.log(1, minimumJumps(problem16Array4));

console.log('--- Problem #17 ---');
/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

    You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.


Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false


Constraints:

    1 <= x <= 9
    At most 100 calls will be made to push, pop, peek, and empty.
    All the calls to pop and peek are valid.


Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.
*/

//#region YOUR CODE HERE
//#endregion

const myQueue1 = new MyQueue();
myQueue1.push(1);
myQueue1.push(2);
myQueue1.push(3);
myQueue1.push(4);
console.log(1, myQueue1.peek());
myQueue1.push(5);
console.log(1, myQueue1.pop());
myQueue1.push(6);
console.log(2, myQueue1.pop());
console.log(3, myQueue1.pop());
console.log(4, myQueue1.peek());
console.log(4, myQueue1.pop());
console.log(5, myQueue1.pop());
console.log(6, myQueue1.peek());

/* --- Data Structure implementations from scratch --- */

console.log('--- Array ---');
/*
Create your own Array class
*/

//#region YOUR CODE HERE
//#endregion

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

//#region YOUR CODE HERE
//#endregion

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('grapes', 10009);
console.log(1009, myHashTable.get('grapes'));
console.log(9, myHashTable.get('apples'));
console.log(undefined, myHashTable.get('oranges'));
console.log(['grapes', 'apples'], myHashTable.keys());
console.log(myHashTable);

console.log('--- Linked List ---');
/*
Create your own Linked List class
*/

//#region YOUR CODE HERE
//#endregion

console.log('--- Singly ---');
const myLinkedList = new MyLinkedList<number>(2);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(3, 2);
console.log(myLinkedList);
console.log([1, 2, 3, 4, 5], myLinkedList.printList());
myLinkedList.delete(1);
console.log([1, 3, 4, 5], myLinkedList.printList());
myLinkedList.delete(12);
console.log([1, 3, 4], myLinkedList.printList());
myLinkedList.delete(0);
console.log([3, 4], myLinkedList.printList());
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(2, 1);
console.log([1, 2, 3, 4, 5], myLinkedList.printList());
myLinkedList.reverse();
console.log([5, 4, 3, 2, 1], myLinkedList.printList());

console.log('--- Doubly ---');
const myDoublyLinkedList = new MyDoublyLinkedList<number>(2);
myDoublyLinkedList.append(4);
myDoublyLinkedList.append(5);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(3, 2);
console.log(myDoublyLinkedList);
console.log([1, 2, 3, 4, 5], myDoublyLinkedList.printList());
myDoublyLinkedList.delete(1);
console.log([1, 3, 4, 5], myDoublyLinkedList.printList());
myDoublyLinkedList.delete(12);
console.log([1, 3, 4], myDoublyLinkedList.printList());
myDoublyLinkedList.delete(0);
console.log([3, 4], myDoublyLinkedList.printList());

console.log('--- Stack ---');
/*
Create your own Stack class
*/

const myStack = new Stack<string>();
myStack.push('google');
myStack.push('reddit');
myStack.push('youtube');
myStack.pop();
console.log('reddit', myStack.peek()?.value);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.push('github');
console.log(myStack);

console.log('--- Queue ---');
/*
Create your own Queue class
*/

const myQueue = new Queue<string>();
myQueue.enqueue('google');
myQueue.enqueue('reddit');
myQueue.enqueue('youtube');
myQueue.dequeue();
myQueue.dequeue();
console.log('youtube', myQueue.peek()?.value);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueue('github');
myQueue.enqueue('facebook');
myQueue.enqueue('twitter');
myQueue.dequeue();
console.log(myQueue);

console.log('--- Binary Search Tree ---');
/*
Create your own BST class
*/

const myBST = new BST();
myBST.insert(50);
myBST.insert(25);
myBST.insert(75);
myBST.insert(12);
myBST.insert(37);
console.log(myBST.lookup(25));
console.log(myBST.lookup(200));
myBST.insert(30);
myBST.insert(40);
myBST.insert(27);
myBST.insert(32);
myBST.insert(38);
myBST.insert(45);
myBST.insert(28);
myBST.insert(34);
myBST.remove(25);
myBST.insert(74);
myBST.remove(75);
myBST.remove(40);
console.log(myBST);

/* --- Gotcha questions --- */
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
What will be the ouyput for the following lines
*/

// console.log(2);
// setInterval(() => {
//   console.log(1);
// }, 0);
// console.log(3);

/*
Resources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
https://stackoverflow.com/questions/44606868/difference-between-let-and-var-inside-settimeout
https://stackoverflow.com/questions/111102/how-do-javascript-closures-work
https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/
//#endregion
