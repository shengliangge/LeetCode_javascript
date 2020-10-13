/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) {  //如果长度为0或1，直接返回
      return head
  }
  let res = new ListNode(-1)    
  res.next = head
  let temp = res
  while (temp.next !== null && temp.next.next !== null) {
      let first = temp.next;     //前交换节点
      let sconed = temp.next.next   //后交换节点
      first.next = sconed.next   //前节点指向后节点的子节点
      sconed.next = first        //后节点指向前节点
      temp.next = sconed           //临时节点指向后节点，完成一组交换
      temp = temp.next.next      //向后移动两位，进行下一组交换
  }
  return res.next
};