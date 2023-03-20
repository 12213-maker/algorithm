//用栈的解法
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
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

var reverseKGroup = function (head, k) {
  let cur = head
  let arr = []
  let item = []
  let p = head;
  while (p) {
    if (item.length === k) {
      arr.push(item)
      item = []
    }
    item.push(p.val)
    p = p.next
  }
  if (item.length !== 0) {
    arr.push(item)
  }
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (item.length === k) {
      item.reverse()
    }
    item.forEach((item) => {
      cur.val = item
      cur = cur.next
    })
  }
  return head
};

let num = [1, 2, 3, 4, 5], k = 3
let head = changeToList(num)
// console.log(reverseKGroup(head, k));




//head-tail的翻转
const reverseK = (head, tail) => {
  let prev = tail.next;   //这个很关键，把下一段的头节点当作当前翻转段的前置节点，以便翻转让head指向下一段
  let node = head;
  while (prev != tail) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return [tail, head];
};
//总而言之，一个虚节点hair用来记录整个链表，一个pre记录上一段的尾节点，
//一个head记录正在翻转的k组的头节点，一个tail记录正在翻转的k组的尾节点
const reverseKGroup2 = (head, k) => {
  // let hair = new ListNode(-1);
  // hair.next = head;
  // let pre = hair;
  // while (head) {
  //   let tail = pre;
  //   for (let i = 0; i < k; i++) {
  //     tail = tail.next;
  //     if (tail == null) return hair.next;
  //   }
  //   let [newHead, newTail] = reverseK(head, tail);
  //   pre.next = newHead;
  //   pre = newTail;
  //   head = pre.next;
  // }
  // return hair.next;


  let dummy = new ListNode(0, head)
  let startPre = dummy, endNext;
  let cur = head;

  while (cur) {
    let tail = cur
    let i = 0
    //找一找当前cur节点的尾节点
    for (i = 0; i < k - 1; i++) {
      if (!tail.next) {
        break;
      }
      tail = tail.next
    }
    endNext = tail.next
    console.log(i);
    let res = i === k - 1 ? reverseK(cur, tail) : [cur, tail]
    startPre.next = res[0]
    res[1].next = endNext
    startPre = res[1]
    cur = endNext
  }
  return dummy.next
};

console.log(reverseKGroup2(head, k));