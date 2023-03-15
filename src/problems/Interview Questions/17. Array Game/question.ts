/** 

Given an integer array arr of distinct integers and an integer k.
A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]). In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0, and the smaller integer moves to the end of the array. The game ends when an integer wins k consecutive rounds.
Return the integer which will win the game.
It is guaranteed that there will be a winner of the game.
 
Example 1:
Input: arr = [2,1,3,5,4,6,7], k = 2
Output: 5
Explanation: Let's see the rounds of the game:
Round |       arr       | winner | win_count
  1   | [2,1,3,5,4,6,7] | 2      | 1
  2   | [2,3,5,4,6,7,1] | 3      | 1
  3   | [3,5,4,6,7,1,2] | 5      | 1
  4   | [5,4,6,7,1,2,3] | 5      | 2
So we can see that 4 rounds will be played and 5 is the winner because it wins 2 consecutive games.
Example 2:
Input: arr = [3,2,1], k = 10
Output: 3
Explanation: 3 will win the first 10 rounds consecutively.
 
Constraints:
* 2 <= arr.length <= 105
* 1 <= arr[i] <= 106
* arr contains distinct integers.
* 1 <= k <= 109


*/

const arrGame = (arr: number[], k: number): number => {
  /*
  arr -> [2,1,3,5,4,6,7]
  k -> 2
  winCount -> 0
  value1 = arr[0] -> 2
  value2 = arr[1] -> 1
  IF value1 < value2 -> NO
  ELSE
    winCount++ -> 1
    splice arr[1] and push value2
    
  arr -> [2,3,5,4,6,7,1]
  k -> 2
  winCount -> 1
  value1 = arr[0] -> 2
  value2 = arr[1] -> 3
  IF value1 < value2 -> YES
    winCount = 1 -> 1
    splice arr[0] and push value1
    
  arr -> [3,5,4,6,7,1,2]
  k -> 2
  winCount -> 1
  value1 = arr[0] -> 3
  value2 = arr[1] -> 5
  IF value1 {3} < value2 {5} -> YES
    winCount = 1 -> 1
    splice arr[0] and push value1
    
  arr -> [5,4,6,7,1,2, 3]
  k -> 2
  winCount -> 1
  value1 = arr[0] -> 5
  value2 = arr[1] -> 4
  IF value1 {5} < value2 {4} -> NO
  ELSE
    winCount++ -> 2
    splice arr[0] and push value1
  IF k === winCount
    return value1
  */

  let winCount = 0;
  while (k !== winCount) {
    const value1 = arr[0];
    const value2 = arr[1];

    if (value1 < value2) {
      winCount = 1;
      arr.splice(0, 1);
      arr.push(value1);
    } else {
      winCount++;
      arr.splice(1, 1);
      arr.push(value2);
    }
  }

  return arr[0];
};

console.log('Actual:', arrGame([2, 1, 3, 5, 4, 6, 7], 2));
console.log('Expected:', 5);

console.log('Actual:', arrGame([3, 2, 1], 10));
console.log('Expected:', 3);
