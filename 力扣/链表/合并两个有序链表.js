function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}
const l1 = [1, 2, 4]
let l2 = [1, 3, 4]

function createList(num) {
  let newNode = new ListNode(num[0], null)
  let newp = newNode;
  for (let i = 1; i < num.length; i++) {
    let newNode = new ListNode(num[i], null)
    newp.next = newNode;+
    newp = newp.next
  }
  return newNode
}
let list1 = createList(l1)
let list2 = createList(l2)

function merge(list1, list2) {
  if (!list1 && !list2) {
    return [];
  }
  let newHead = new ListNode()
  let newp = newHead
  while (list1 && list2) {
    if (list1.val < list2.val) {
      newp.next = list1
      list1 = list1.next
    } else {
      newp.next = list2
      list2 = list2.next
    }
    newp = newp.next
  }
  if (list1) {
    newp.next = list1
  }
  if (list2) {
    newp.next = list2
  }
  return newHead.next
}

console.log(merge(list1,list2));