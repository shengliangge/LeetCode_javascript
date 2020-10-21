// https://leetcode-cn.com/problems/reorder-list/
// 定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let newList = new ListNode(-1)
  let tempNewList = newList
  let temp = head, length = 0;
  while (temp != null) {
      newList.next = temp
      newList.next.next=tempNewList
      temp = temp.next;
      length++
  }
  console.log(newList)
  console.log(head)
  console.log(length)
};