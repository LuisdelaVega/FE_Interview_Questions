import { ListNode } from '../utils';

// Case #1
export const list1Head = new ListNode(1);
const list1Node2 = new ListNode(2);
const list1Node3 = new ListNode(3);
const list1Node4 = new ListNode(4);
const list1Node5 = new ListNode(5);

list1Head.next = list1Node2;
list1Node2.next = list1Node3;
list1Node3.next = list1Node4;
list1Node4.next = list1Node5;

// Result #1
export const answer1Head = new ListNode(1);
const answer1Node2 = new ListNode(2);
const answer1Node3 = new ListNode(3);
const answer1Node5 = new ListNode(5);

answer1Head.next = answer1Node2;
answer1Node2.next = answer1Node3;
answer1Node3.next = answer1Node5;

// Case #2
export const list2Head = new ListNode(1);

// Result #2
export const answer2Head = null;

// Case #3
export const list3Head = new ListNode(1);
const list3Node2 = new ListNode(2);
list3Head.next = list3Node2;

// Result #3
export const answer3Head = new ListNode(1);

// Case #4
export const list4Head = new ListNode(1);
const list4Node2 = new ListNode(2);
const list4Node3 = new ListNode(3);
const list4Node4 = new ListNode(4);
const list4Node5 = new ListNode(5);
list4Head.next = list4Node2;
list4Node2.next = list4Node3;
list4Node3.next = list4Node4;
list4Node4.next = list4Node5;

// Result #4
export const answer4Head = new ListNode(1);
const answer4Node2 = new ListNode(2);
const answer4Node4 = new ListNode(4);
const answer4Node5 = new ListNode(5);
answer4Head.next = answer4Node2;
answer4Node2.next = answer4Node4;
answer4Node4.next = answer4Node5;

// Case #5
export const list5Head = new ListNode(1);
const list5Node2 = new ListNode(2);
list5Head.next = list5Node2;

// Result #5
export const answer5Head = new ListNode(2);
