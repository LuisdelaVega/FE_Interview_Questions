//#region --- Answer to Problem #5 ---

export const pipe =
  (...rest: ((x: any) => any)[]) =>
  (value: any) => {
    return rest.reduce((acc, currVal) => {
      return currVal(acc);
    }, value);
  };

export function pipeEs5() {
  const argArray: ((x: any) => any)[] = Array.from(arguments);

  return function (value: any) {
    return argArray.reduce(function (acc, currVal) {
      return currVal(acc);
    }, value);
  };
}
//#endregion

//#region --- Answer to Problem #6 ---

/**
 * This solution is for when they expicitly ask you not to use
 * any built in array methods.
 */
export const reverseString = (str: string) => {
  if (!str) return str;

  const strArray = str.split('');
  const midPoint = Math.ceil(strArray.length / 2);

  for (
    let forwardIndex = 0, backwardsIndex = strArray.length - 1;
    forwardIndex < midPoint;
    forwardIndex++, backwardsIndex--
  ) {
    // The most common way is to declare this here 👇
    // const backwardsIndex = strArray.length - forwardMovingIndex - 1;
    const tempChar = strArray[backwardsIndex];
    strArray[backwardsIndex] = strArray[forwardIndex];
    strArray[forwardIndex] = tempChar;
  }

  return strArray.join('');
};

export const reverseStringWithArrSort = (str: string) => {
  if (!str.length) return str;

  return str
    .split('')
    .sort(() => 1)
    .join('');
};

//#endregion

//#region --- Answer to Problem #7 ---

// Best: O(n*m). Worst: basically O(n^2)
export const logPairs = <T>(arr: T[]) => {
  // O(n)
  for (let i = 0; i < arr.length - 1; ++i) {
    const slicedArr = arr.slice(i + 1);
    slicedArr.forEach((value) => console.log(arr[i], value)); // O(m)
  }
};

//#endregion

//#region --- Answer to Problem #8 ---

// More readable, less efficient O(n*m)
export const containsCommonValue = (arr1: string[], arr2: string[]) =>
  arr1.some((value) => arr2.includes(value));

// O(n)
export const containsCommonValueNoArrayFunc = (
  arr1: string[],
  arr2: string[]
) => {
  const setFromArr1 = new Set(arr1);

  // O(n)
  for (let value of arr2) {
    // Set access is O(1)
    if (setFromArr1.has(value)) {
      return true;
    }
  }

  return false;
};

// O(n+m) = O(n) linear
export const containsCommonValueNoArrayFuncNoSet = (
  arr1: string[],
  arr2: string[]
) => {
  const concatArr = [...arr1, ...arr2];
  concatArr.sort(); // O(n)

  // O(m)
  for (let index = 0; index < concatArr.length - 2; ++index) {
    if (concatArr[index] === concatArr[index + 1]) {
      return true;
    }
  }

  return false;
};

//#endregion

//#region --- Answer to Problem #9 ---

export const findPairWithSum = (arr: number[], sum: number) => {
  const setFromArr = new Set(arr);

  for (const value of arr) {
    const difference = sum - value;

    if (setFromArr.has(difference)) {
      return [value, difference];
    }
  }

  return [];
};

//#endregion

//#region --- Answer to Problem #10 ---

export const mergeSortedArrays = (arr1: number[], arr2: number[]) => {
  if (!arr1.length) {
    return arr2;
  } else if (!arr2.length) {
    return arr1;
  }
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

export const mergeSortedArraysNoSortFunc = (arr1: number[], arr2: number[]) => {
  if (!arr1.length) {
    return arr2;
  } else if (!arr2.length) {
    return arr1;
  }

  const result: number[] = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length) {
    const arrr1Value = arr1[index1];
    const arrr2Value = arr2[index2];

    if (typeof arrr2Value === 'undefined' || arrr1Value < arrr2Value) {
      result.push(arrr1Value);
      ++index1;
    } else {
      result.push(arrr2Value);
      ++index2;
    }
  }

  while (index2 < arr2.length) {
    result.push(arr2[index2]);
    ++index2;
  }

  return result;
};

//#endregion

//#region --- Answer to Problem #11 ---

// https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
// globalMax -> -Infinity
// index -> 0
//          👇
// nums -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// previousSum -> nums[index] + localMax -> -2 + 0 = -2
// localMax -> Larger between nums[index] & previousSum -> -2 > -2 = -2
// IF localMax (-2) > globalMax (-Infinity) -> YES
// globalMax -> -2

// index -> 1
//             👇
// nums -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// previousSum -> nums[index] + localMax -> -2 + 1 = -1
// localMax -> Larger between nums[index] (1) & previousSum (-1) -> 1
// IF localMax (1) > globalMax (-2) -> YES
//    globalMax -> 1

// index -> 2
//                 👇
// nums -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// previousSum -> nums[index] (-3) + localMax (1) -> -2
// localMax -> Larger between nums[index] (-3) & previousSum (-2) -> -2
// IF localMax (-2) > globalMax (1) -> NO
//    globalMax -> 1

// index -> 3
//                    👇
// nums -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// previousSum -> nums[index] (4) + localMax (-2) -> 2
// localMax -> Larger between nums[index] (4) & previousSum (2) -> 4
// IF localMax (4) > globalMax (1) -> YES
//    globalMax -> 4

// index -> 4
//                        👇
// nums -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// previousSum -> nums[index] (-1) + localMax (4) -> 3
// localMax -> Larger between nums[index] (-1) & previousSum (3) -> 3
// IF localMax (3) > globalMax (4) -> NO
//    globalMax -> 4

// index -> 5
//                           👇
// nums -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// previousSum -> nums[index] (2) + localMax (3) -> 5
// localMax -> Larger between nums[index] (2) & previousSum (5) -> 5
// IF localMax (5) > globalMax (4) -> YES
//    globalMax -> 5

// index -> 6
//                              👇
// nums -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// previousSum -> nums[index] (1) + localMax (5) -> 6
// localMax -> Larger between nums[index] (1) & previousSum (6) -> 6
// IF localMax (6) > globalMax (5) -> YES
//    globalMax -> 6

// index -> 6
//                                  👇
// nums -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// previousSum -> nums[index] (-5) + localMax (6) -> 1
// localMax -> Larger between nums[index] (-5) & previousSum (1) -> 1
// IF localMax (1) > globalMax (6) -> NO
//    globalMax -> 6

// index -> 7
//                                     👇
// nums -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// previousSum -> nums[index] (4) + localMax (1) -> 5
// localMax -> Larger between nums[index] (4) & previousSum (5) -> 5
// IF localMax (5) > globalMax (6) -> NO
//    globalMax -> 6

export const maxSubArray = (nums: number[]): number => {
  let localMax = 0;
  let globalMax = -Infinity; // Set to -Infinity so that it's always less than localMax at first

  for (let index = 0; index < nums.length; index++) {
    const previousArraySum = nums[index] + localMax;

    /**
     * Check if the num and index is larger than the sum.
     * If so, that means the there is a sub-array starting at that index
     * that is larger than the one we've been following so far.
     */
    localMax = nums[index] > previousArraySum ? nums[index] : previousArraySum;

    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
};

//#endregion

//#region --- Answer to Problem #13 ---

export const containsDuplicate = (nums: number[]): boolean =>
  new Set(nums).size !== nums.length;

//#endregion

//#region --- Answer to Problem #14 ---

export const rotate = (nums: number[], k: number): void => {
  if (!(k % nums.length)) {
    return;
  }

  const shiftIndex = nums.length - (k % nums.length);
  const tempArr = nums.slice(shiftIndex);
  let popAmount = nums.length - shiftIndex;

  while (popAmount > 0) {
    nums.pop();
    popAmount--;
  }

  nums.unshift(...tempArr);
};

//#endregion

//#region --- Answer to Problem #15 ---
export const firstRecurringCharacter = (arr: number[]): number | undefined => {
  const myMap: {
    [key: number]: boolean;
  } = {};
  let result: number | undefined = undefined;
  let globalLowestIndex = Infinity;

  for (let index = 0; index < arr.length; ++index) {
    const value = arr[index];
    if (!myMap[value]) {
      myMap[value] = true;
      continue;
    }

    const firstIndexOfValue = arr.indexOf(value);

    if (firstIndexOfValue < globalLowestIndex) {
      result = value;
      globalLowestIndex = index;
    }
  }

  return result;
};
//#endregion

//#region  --- Answer to Problem #16 ---
/*
jumps -> 0
index -> 0
       👇
arr -> [2, 4, 4, 1, 3, 3, 1, 1, 1]

currentValue -> 2
       
most I can move is 2
             👇
arr -> [2, 4, 4, 1, 3, 3, 1, 1, 1]

nextIndex -> index {0} + 1 -> 1

array of posibilities -> arr.split(nextIndex {1}, nextIndex {1} + currentValue {2} {3}) -> [3, 1]
largest number based on value and index is found at index 0 -> 3

subIndex -> 0

update index -> nextIndex {1} + subIndex {0} -> 1
jumps++ -> 1

IF index {1} > arr.length - 1 {4} -> NO
    return jumps


jumps -> 1
index -> 1
          👇
arr -> [2, 4, 4, 1, 3, 3, 1, 1, 1]

currentValue -> 3
       
most I can move is 3
                   👇
arr -> [2, 4, 4, 1, 3, 3, 1, 1, 1]

nextIndex -> index {1} + 1 -> 2
             👇
arr -> [2, 4, 4, 1, 3, 3, 1, 1, 1]

end -> nextIndex {2} + currentValue {4} -> 6

IF end > arr.length -> YES
    return ++jumps

array of posibilities -> arr.split(nextIndex {2}, nextIndex {2} + currentValue {4} {6}) -> [4, 1, 1, 3] Remember that end is not inclusive
arr.length -> 9

largest number based on value and index is 3 -> 3 + 3 -> 6

subIndex -> 3

update index -> nextIndex {2} + subIndex {3} -> 5
jumps++ -> 2

IF index {1} > arr.length - 1 {6} -> NO
    return jumps
*/
export const minimumJumps = (nums: number[]): number => {
  if (nums.length <= 1) {
    return 0;
  }

  let index = 0;
  let jumps = 0;

  while (index < nums.length) {
    const currentValue = nums[index];
    const start = index + 1;
    const end = start + currentValue;

    // This means that we can reach the end based on the current value
    if (end >= nums.length) {
      return ++jumps;
    }

    const options = nums.slice(start, end);

    // Calculate the largest number in the posibilities based on it's value and index
    let largestSize = -Infinity;
    let subIndex = 0;
    options.forEach((value, index1) => {
      const size = value + index1;
      if (size > largestSize) {
        largestSize = size;
        subIndex = index1;
      }
    });

    index = start + subIndex;
    jumps++;
  }

  return jumps;
};

export const minimumJumpsMostEfficient = (nums: number[]): number => {
  let endOfJump = 0,
    farthestJump = 0,
    jumps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthestJump = Math.max(farthestJump, i + nums[i]);
    if (i === endOfJump) {
      endOfJump = farthestJump;
      jumps++;
    }
  }
  return jumps;
};
//#endregion

//#region --- Array Implementation ---
export class MyArray {
  length: number;
  data: any = {};

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number) {
    return this.data[index];
  }

  push(item: any) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastIndex = this.length - 1;
    const lastItem = this.data[lastIndex];

    delete this.data[lastIndex];
    this.length--;

    return lastItem;
  }

  delete(index: number) {
    this.shiftItemsAtIndex(index);

    delete this.data[this.length - 1];
    this.length--;
  }

  private shiftItemsAtIndex(index: number) {
    for (let i = index; i < this.length; ++i) {
      this.data[i] = this.data[i + 1];
    }
  }
}
//#endregion

//#region --- Hash Table Implementation ---
type HashTableData = [string, any];
export class HashTable {
  data: HashTableData[][];
  constructor(size: number) {
    this.data = new Array<[HashTableData]>(size);
  }

  private _hash(key: string): number {
    let hash = 0;

    for (let index = 0; index < key.length; ++index) {
      hash = (hash + key.charCodeAt(index) * index) % this.data.length;
    }

    return hash;
  }

  set(key: string, value: any): void {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      const test: HashTableData = [key, value];
      this.data[hash] = [test];

      return;
    }

    const storedItem = this.data[hash].find(([dataKey]) => dataKey === key);

    if (storedItem) {
      storedItem[1] = value;
      return;
    }

    this.data[hash].push([key, value]);
  }

  get(key: string) {
    const hash = this._hash(key);
    const dataArray = this.data[hash];

    return dataArray?.find(([dataKey]) => dataKey === key)?.[1];
  }

  keys(): string[] {
    return this.data.reduce((acc, currValue) => {
      currValue.forEach(([key]) => acc.push(key));

      return acc;
    }, [] as string[]);
  }
}
//#endregion

//#region --- Linked List Implementations ---

// --- Singly ---
type Node<T> = {
  value: T;
  next: Node<T> | undefined;
};
export class MyLinkedList<T> {
  head: Node<T>;
  tail: Node<T>;
  length: number;
  constructor(value: T) {
    this.head = { value, next: undefined };
    this.tail = this.head;
    this.length = 1;
  }

  private _createNode(value: T, next?: Node<T>): Node<T> {
    return {
      value,
      next
    };
  }

  append(value: T): void {
    const newNode = this._createNode(value);
    // Tail is referencing the same object as head at this point
    this.tail.next = newNode;
    // Change the object that tail references
    this.tail = newNode;
    ++this.length;
  }

  prepend(value: T): void {
    const newNode = this._createNode(value, this.head);
    this.head = newNode;
    ++this.length;
  }

  printList() {
    const arr: T[] = [];
    let currentNode: Node<T> | undefined = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  /**
   * Gets the `Node` at a specific index in the Linked List.
   * If the index is a value less than 0, the `Node` at index 0 (head)
   * will be returned.
   *
   * If the index is a value longer than the length of the Liked List,
   * the `Node` at the last index (tail) will be returned.
   * @param index The index of the desired `Node` in the Linked List
   * @returns The `Node` at the specified index
   */
  get(index: number): Node<T> {
    if (index <= 0) {
      return this.head;
    } else if (index >= this.length) {
      return this.tail;
    }

    let nodeAtIndex: Node<T> = this.head;

    while (index-- > 0 && nodeAtIndex.next) {
      nodeAtIndex = nodeAtIndex.next;
    }

    return nodeAtIndex;
  }

  insert(value: T, index: number): void {
    if (index <= 0) {
      this.prepend(value);
      return;
    } else if (index >= this.length) {
      this.append(value);
      return;
    }

    const leftSideNode = this.get(index - 1);
    const rightSideNode = leftSideNode.next;
    const newNode = this._createNode(value, rightSideNode);
    leftSideNode.next = newNode;
    ++this.length;
  }

  delete(index: number): void {
    if (this.length === 1) {
      return;
    } else if (index <= 0) {
      this.head = this.head.next!;
      --this.length;
      return;
    }

    if (index >= this.length) {
      index = this.length - 1;
    }

    const leftSideNode = this.get(index - 1);
    const unwantedNode = leftSideNode.next;
    const rightSideNode = unwantedNode?.next;
    leftSideNode.next = rightSideNode;

    if (!rightSideNode) {
      this.tail = leftSideNode;
    }
    --this.length;
  }

  reverse() {
    if (this.length === 1) {
      return;
    }

    let leftSideNode = this.head;
    let rightSideNode = leftSideNode.next;
    leftSideNode.next = undefined;

    // 0 --> 1 --> 2 --> 3 --> 4 --> 5 --> undefined
    //                     ⬅️ ➡️   ⏲
    // undefined <-- 0 <-- 1 | 2 --> 3 --> 4 --> 5 --> undefined
    //                                            ⬅️   ➡️ ⏲
    // undefined <-- 0 <-- 1 <-- 2 <-- 3 <-- 4 <-- 5 | undefined
    while (rightSideNode) {
      let tempNode = rightSideNode.next;

      rightSideNode.next = leftSideNode;
      leftSideNode = rightSideNode;
      rightSideNode = tempNode;
    }

    this.head = leftSideNode;
  }
}

// --- Doubly ---
type DoublyNode<T> = {
  value: T;
  next: DoublyNode<T> | undefined;
  prev: DoublyNode<T> | undefined;
};
export class MyDoublyLinkedList<T> {
  head: DoublyNode<T>;
  tail: DoublyNode<T>;
  length: number;
  constructor(value: T) {
    this.head = { value, next: undefined, prev: undefined };
    this.tail = this.head;
    this.length = 1;
  }

  private _createNode(
    value: T,
    next?: DoublyNode<T>,
    prev?: DoublyNode<T>
  ): DoublyNode<T> {
    return {
      value,
      next,
      prev
    };
  }

  append(value: T): void {
    const newNode = this._createNode(value, undefined, this.tail);
    // Tail is referencing the same object as head at this point
    this.tail.next = newNode;
    // Change the object that tail references
    this.tail = newNode;
    ++this.length;
  }

  prepend(value: T): void {
    const newNode = this._createNode(value, this.head);
    this.head.prev = newNode;
    this.head = newNode;
    ++this.length;
  }

  printList() {
    const arr: T[] = [];
    let currentNode: DoublyNode<T> | undefined = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  /**
   * Gets the `Node` at a specific index in the Linked List.
   * If the index is a value less than 0, the `Node` at index 0 (head)
   * will be returned.
   *
   * If the index is a value longer than the length of the Liked List,
   * the `Node` at the last index (tail) will be returned.
   * @param index The index of the desired `Node` in the Linked List
   * @returns The `Node` at the specified index
   */
  get(index: number): DoublyNode<T> {
    if (index <= 0) {
      return this.head;
    } else if (index >= this.length) {
      return this.tail;
    }

    let nodeAtIndex: DoublyNode<T> = this.head;
    const midPoint = Math.floor(this.length / 2);
    let direction: keyof DoublyNode<T> = 'next';

    /**
     * We want to iterate backwards if the index is closer to
     * the tail than the head.
     */
    if (index > midPoint) {
      nodeAtIndex = this.tail;
      index = this.length - index;
      direction = 'prev';
    }

    while (index-- > 0 && nodeAtIndex[direction]) {
      nodeAtIndex = nodeAtIndex[direction]!;
    }

    return nodeAtIndex;
  }

  insert(value: T, index: number): void {
    if (index <= 0) {
      this.prepend(value);
      return;
    } else if (index >= this.length) {
      this.append(value);
      return;
    }

    const leftSideNode = this.get(index - 1);
    const rightSideNode = leftSideNode.next;
    const newNode = this._createNode(value, rightSideNode, leftSideNode);
    leftSideNode.next = newNode;

    if (rightSideNode) {
      rightSideNode.prev = newNode;
    }
    ++this.length;
  }

  delete(index: number): void {
    if (this.length === 1) {
      return;
    } else if (index <= 0) {
      this.head = this.head.next!;
      this.head.prev = undefined;
      --this.length;
      return;
    }

    if (index >= this.length) {
      index = this.length - 1;
    }

    const leftSideNode = this.get(index - 1);
    const unwantedNode = leftSideNode.next;
    const rightSideNode = unwantedNode?.next;
    leftSideNode.next = rightSideNode;
    if (rightSideNode) {
      rightSideNode.prev = leftSideNode;
    } else {
      this.tail = leftSideNode;
    }
    --this.length;
  }
}
//#endregion

//#region --- Stack Implementation ---
export class Stack<T> {
  top: Node<T> | undefined;
  length: number;
  constructor() {
    this.top = undefined;
    this.length = 0;
  }

  private _createNode(value: T, next?: Node<T>): Node<T> {
    return {
      value,
      next
    };
  }

  peek() {
    return this.top;
  }

  push(value: T) {
    const newNode = this._createNode(value, this.top);
    this.top = newNode;
    ++this.length;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    const poppedNode = this.top;
    this.top = poppedNode?.next;
    --this.length;

    return poppedNode;
  }
}
//#endregion

//#region --- Queue Implementation ---
export class Queue<T> {
  first: Node<T> | undefined;
  last: Node<T> | undefined;
  length: number;
  constructor() {
    this.first = undefined;
    this.last = undefined;
    this.length = 0;
  }

  private _createNode(value: T, next?: Node<T>): Node<T> {
    return {
      value,
      next
    };
  }

  peek() {
    return this.first;
  }

  enqueue(value: T) {
    const newNode = this._createNode(value);
    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    ++this.length;
  }

  dequeue() {
    if (!this.length) {
      return undefined;
    }

    const dequeuedNode = this.first;
    this.first = dequeuedNode?.next;

    if (!this.first) {
      this.last = undefined;
    }

    --this.length;

    return dequeuedNode;
  }
}

export class MyQueue {
  private stack: number[];
  private queue: number[];
  constructor() {
    this.stack = [];
    this.queue = [];
  }

  push(x: number): void {
    if (this.empty()) {
      this.queue.push(x);
      return;
    }

    while (this.queue.length) {
      this.stack.push(this.queue.pop()!);
    }

    this.queue.push(x);

    while (this.stack.length) {
      this.queue.push(this.stack.pop()!);
    }
  }

  pop(): number | undefined {
    return this.queue.pop();
  }

  peek(): number {
    return this.queue[this.queue.length - 1];
  }

  empty(): boolean {
    return !this.queue.length;
  }
}

export class MyQueueOptimized {
  private stack: number[];
  private queue: number[];
  constructor() {
    this.stack = [];
    this.queue = [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number | undefined {
    if (!this.queue.length) {
      while (this.stack.length) {
        this.queue.push(this.stack.pop()!);
      }
    }

    return this.queue.pop();
  }

  peek(): number | undefined {
    if (!this.queue.length) {
      while (this.stack.length) {
        this.queue.push(this.stack.pop()!);
      }
    }

    return this.queue.at(-1);
  }

  empty(): boolean {
    return !this.queue.length && !this.stack.length;
  }
}
//#endregion

//#region --- BST Implementation ---
type BSTNode = {
  value: number;
  leftNode: BSTNode | undefined;
  rightNode: BSTNode | undefined;
};
export class BST {
  root: BSTNode | undefined;
  constructor() {
    this.root = undefined;
  }

  private _createNode(
    value: number,
    leftNode?: BSTNode,
    rightNode?: BSTNode
  ): BSTNode {
    return {
      value,
      leftNode,
      rightNode
    };
  }

  insert(value: number): void {
    const newNode = this._createNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    /**
     * Check the value of the root node
     * IF `value` is less than the value of the root node
     *    get the left node
     * ELSE
     *    get the right node
     *
     * IF the node is undefined
     *    assign it to the new node
     *
     * REPEAT
     */

    let parentNode = this.root;

    while (true) {
      if (newNode.value === parentNode.value) {
        return;
      }

      let nextNodeKey: keyof BSTNode =
        newNode.value < parentNode.value ? 'leftNode' : 'rightNode';
      const nextNode = parentNode[nextNodeKey];

      if (!nextNode) {
        parentNode[nextNodeKey] = newNode;
        return;
      }

      parentNode = nextNode;
    }
  }

  lookup(value: number): BSTNode | undefined {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode =
        value < currentNode.value
          ? currentNode.leftNode
          : currentNode.rightNode;
    }

    return undefined;
  }

  remove(value: number): void {
    let parentNode = this.root;
    if (!parentNode) {
      return;
    }

    const nodeToRemove = this.lookup(value);
    if (!nodeToRemove) {
      return;
    }

    while (
      parentNode.leftNode?.value !== value &&
      parentNode.rightNode?.value !== value
    ) {
      parentNode =
        value < parentNode.value ? parentNode.leftNode! : parentNode.rightNode!;
    }

    const nodeSide: keyof BSTNode =
      parentNode.leftNode?.value === value ? 'leftNode' : 'rightNode';

    let replacementNode = nodeToRemove.rightNode
      ? nodeToRemove.rightNode
      : nodeToRemove.leftNode;

    if (!replacementNode) {
      parentNode[nodeSide] = undefined;
      return;
    }

    let replacementNodeParent = nodeToRemove;

    while (replacementNode.leftNode) {
      replacementNodeParent = replacementNode;
      replacementNode = replacementNode.leftNode || replacementNode.rightNode;
    }

    // Start replacing the nodes
    parentNode[nodeSide] = replacementNode;

    if (replacementNode.value !== nodeToRemove.leftNode?.value) {
      replacementNode.leftNode = nodeToRemove.leftNode;
    }

    replacementNodeParent.leftNode = replacementNode.rightNode;

    if (replacementNode.value !== nodeToRemove.rightNode?.value) {
      replacementNode.rightNode = nodeToRemove.rightNode;
    }
  }
}
//#endregion
