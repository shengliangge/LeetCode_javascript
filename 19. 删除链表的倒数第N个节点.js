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

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var removeNthFromEnd = function (head, n) {
  let emptyHead=new ListNode('emp')
  emptyHead.next=head
  // 快慢指针法
  let cur = emptyHead
  let del = emptyHead
  for (let i = 0; i <= n; i++) {
    cur = cur.next
  }
  while (cur.next) {
    cur = cur.next
    del = del.next
  }
  del.next = del.next.next
  return head
};



// ListNode dummy = new ListNode(0);
// dummy.next = head;
// ListNode first = dummy;
// ListNode second = dummy;
// // Advances first pointer so that the gap between first and second is n nodes apart
// for (int i = 1; i <= n + 1; i++) {
//     first = first.next;
// }
// // Move first to the end, maintaining the gap
// while (first != null) {
//     first = first.next;
//     second = second.next;
// }
// second.next = second.next.next;
// return dummy.next;

