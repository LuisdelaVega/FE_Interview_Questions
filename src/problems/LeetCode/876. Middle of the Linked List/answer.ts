import { ListNode } from '../utils';

export function middleNode(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  /**
   * We want to keep track of the currentNode and move it to the next
   * node when the current index is an even number.
   *
   * head -> [1, 2, 3, 4, 5]
   *
   * RUNNING_NODE -> head -> [1, 2, 3, 4, 5]
   * MIDDLE_NODE -> head -> [1, 2, 3, 4, 5]
   * index = 1;
   * IF RUNNING_NODE.next is null -> NO
   *    return MIDDLE_NODE
   * IF index % 2 === 0 -> NO
   *    MIDDLE_NODE = MIDDLE_NODE.next
   * index++ -> 2
   * RUNNING_NODE = RUNNING_NODE.next -> [2, 3, 4, 5]
   *
   * RUNNING_NODE -> [2, 3, 4, 5]
   * MIDDLE_NODE -> [1, 2, 3, 4, 5]
   * index = 2;
   * IF RUNNING_NODE.next is null -> NO
   *    return MIDDLE_NODE
   * IF index % 2 === 0 -> YES
   *    MIDDLE_NODE = MIDDLE_NODE.next -> [2, 3, 4, 5]
   * index++ -> 3
   * RUNNING_NODE = RUNNING_NODE.next -> [3, 4, 5]
   *
   * RUNNING_NODE -> [3, 4, 5]
   * MIDDLE_NODE -> [2, 3, 4, 5]
   * index = 3;
   * IF RUNNING_NODE.next is null -> NO
   *    return MIDDLE_NODE
   * IF index % 2 === 0 -> NO
   *    MIDDLE_NODE = MIDDLE_NODE.next -> [2, 3, 4, 5]
   * index++ -> 4
   * RUNNING_NODE = RUNNING_NODE.next -> [4, 5]
   *
   * RUNNING_NODE -> [4, 5]
   * MIDDLE_NODE -> [2, 3, 4, 5]
   * index = 4;
   * IF RUNNING_NODE.next is null -> NO
   *    return MIDDLE_NODE
   * IF index % 2 === 0 -> YES
   *    MIDDLE_NODE = MIDDLE_NODE.next -> [3, 4, 5]
   * index++ -> 5
   * RUNNING_NODE = RUNNING_NODE.next -> [5]
   *
   * RUNNING_NODE -> [5]
   * MIDDLE_NODE -> [3, 4, 5]
   * index = 5;
   * IF RUNNING_NODE.next is null -> YES
   *    return MIDDLE_NODE -> [3, 4, 5]
   * IF index % 2 === 0 -> YES
   *    MIDDLE_NODE = MIDDLE_NODE.next -> [3, 4, 5]
   * index++ -> 5
   * RUNNING_NODE = RUNNING_NODE.next -> [5]
   */

  let runningNode = head;
  let middleNode = head;
  let index = 1;

  while (runningNode.next) {
    if (index % 2 === 0) {
      middleNode = middleNode.next!;
    }

    runningNode = runningNode.next;
    index++;
  }

  return index % 2 === 0 ? middleNode.next : middleNode;
}
