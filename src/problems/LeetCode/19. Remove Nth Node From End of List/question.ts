import { removeNthFromEnd } from './answer';
import {
  answer1Head,
  answer2Head,
  answer3Head,
  answer4Head,
  answer5Head,
  list1Head,
  list2Head,
  list3Head,
  list4Head,
  list5Head
} from './utils';

const question = () => {
  console.log('--- LeetCode 19. Remove Nth Node From End of List ---');
  /*
  Given the head of a linked list, remove the nth node from the end of the list and return its head.

  Example 1:

  Input: head = [1,2,3,4,5], n = 2
  Output: [1,2,3,5]

  Example 2:

  Input: head = [1], n = 1
  Output: []

  Example 3:

  Input: head = [1,2], n = 1
  Output: [1]

  

  Constraints:

      The number of nodes in the list is sz.
      1 <= sz <= 30
      0 <= Node.val <= 100
      1 <= n <= sz
  */

  /**
   * Definition for singly-linked list.
   * class ListNode {
   *     val: number
   *     next: ListNode | null
   *     constructor(val?: number, next?: ListNode | null) {
   *         this.val = (val===undefined ? 0 : val)
   *         this.next = (next===undefined ? null : next)
   *     }
   * }
   */
  //#region YOUR CODE HERE
  // function removeNthFromEnd(
  //   head: ListNode | null,
  //   n: number
  // ): ListNode | null {}
  //#endregion

  console.log('Actual:', removeNthFromEnd(list1Head, 2));
  console.log('Expected:', answer1Head);
  console.log('Actual:', removeNthFromEnd(list2Head, 1));
  console.log('Expected:', answer2Head);
  console.log('Actual:', removeNthFromEnd(list3Head, 1));
  console.log('Expected:', answer3Head);
  console.log('Actual:', removeNthFromEnd(list4Head, 3));
  console.log('Expected:', answer4Head);
  console.log('Actual:', removeNthFromEnd(list5Head, 2));
  console.log('Expected:', answer5Head);
};

export default question;
