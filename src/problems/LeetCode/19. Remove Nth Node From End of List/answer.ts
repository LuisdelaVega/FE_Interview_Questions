import { ListNode } from "../utils";

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (!head) {
    return null;
  }

  let index = 0;
  let leadingNode = head;

  while (index < n - 1) {
    leadingNode = leadingNode.next!;
    index++;
  }

  let trailingNode = head;
  let slowTrailingNode = trailingNode;
  let removingHead = true;

  while (leadingNode.next) {
    if (removingHead) {
      removingHead = false;
    }

    slowTrailingNode = trailingNode;
    trailingNode = trailingNode.next!;
    leadingNode = leadingNode.next!;
  }

  if (removingHead) {
    head = head.next;
    return head;
  }

  slowTrailingNode.next = trailingNode.next;

  return head;
}
