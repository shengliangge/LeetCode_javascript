// 61. 旋转链表
// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let len = 0
  let temp = head
  while (temp) {
    temp++
    temp = temp.next
  }
  if (k == len) {
    return head
  }
  k = k > len ? k % len : k
  let cur = head

}; 