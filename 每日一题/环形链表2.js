/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if(head==null){
      return null
  }
  let fast = head, slow = head
  while (fast != null) {
      slow = slow.next;      //慢指针
      if (fast.next != null) {
          fast = fast.next.next   //快指针
      } else {
          return null        //链表到头了
      }
      if (fast == slow) {  //快慢指针第一次碰面
          fast = head
          while (fast !== slow) {
              fast = fast.next;
              slow = slow.next;
          }
          return slow
      }
  }
  return null
};