// 2. 两数相加

// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this .next = null;
}

var addTwoNumbers = function (l1, l2) {
  let list = new ListNode('head')  //创建一个新的链表，头指针
  let temp = list
  let add = 0  //是否进位
  let sum = 0 //和
  while (l1 || l2) { //按最长的循环
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
    temp.next = new ListNode(sum % 10)
    temp = temp.next
    add = sum >= 10 ? 1 : 0
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  add && (temp.next = new ListNode(add))
  return list.next
};

// var addTwoNumbers = function(l1, l2) {
//   let node = new ListNode('head');
//   let temp = node;//哑结点
//   let add = 0;//是否进一
//   let sum = 0;//新链表当前未取余的值 = 链表1值 + 链表2值 + add;

//   //遍历，直到最长的都为空
//   while(l1 || l2){
//       sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
//       temp.next = new ListNode(sum % 10);//取余则为新链表的值
//       temp = temp.next;
//       add = sum >= 10 ? 1 : 0;
//       l1 && (l1 = l1.next);
//       l2 && (l2 = l2.next);
//   }
//   add && (temp.next = new ListNode(add));
//   return node.next;
// };


