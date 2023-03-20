/*
给你两个单链表的头节点 headA 和 headB ，
请你找出并返回两个单链表相交的起始节点。
如果两个链表不存在相交节点，返回 null 。
*/

class ListNode {
  constructor(val, next) {
    this.val = val || 0
    this.next = next || 0
  }
}
var changeToList = (arr) => {
  let dummy = new ListNode(0)
  let p = dummy
  arr.forEach(item => {
    let curNode = new ListNode(item, null)
    p.next = curNode
    p = p.next
  });
  return dummy.next
}

var getIntersectionNode = function (headA, headB) {
  //使用set储存其中一个链表的节点
  let set = new Set()
  let p1 = headA;
  let p2 = headB;
  while(p1){
    set.add(p1)
    p1 = p1.next;
  }
  while(p2){
    if(set.has(p2)){
      return p1
    }
    p2 = p2.next
  }
  return null
}