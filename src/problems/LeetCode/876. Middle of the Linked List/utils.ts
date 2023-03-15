import { ListNode } from '../utils';

export const list1Head = new ListNode(1);
const list1Node2 = new ListNode(2);
export const list1Node3 = new ListNode(3);
const list1Node4 = new ListNode(4);
const list1Node5 = new ListNode(5);

list1Head.next = list1Node2;
list1Node2.next = list1Node3;
list1Node3.next = list1Node4;
list1Node4.next = list1Node5;

export const list2Head = new ListNode(1);
const list2Node2 = new ListNode(2);
const list2Node3 = new ListNode(3);
export const list2Node4 = new ListNode(4);
const list2Node5 = new ListNode(5);
const list2Node6 = new ListNode(6);

list2Head.next = list2Node2;
list2Node2.next = list2Node3;
list2Node3.next = list2Node4;
list2Node4.next = list2Node5;
list2Node5.next = list2Node6;
