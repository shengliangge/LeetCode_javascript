// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let emptyHead=new ListNode('emp')
 emptyHead.next=head
 // 快慢指针法
 let cur = emptyHead
 let del = emptyHead
 for (let i = 0; i <= n; i++) {
   cur = cur.next
 }
 while (cur) {
   cur = cur.next
   del = del.next
 }
 del.next = del.next.next
 return emptyHead.next
};