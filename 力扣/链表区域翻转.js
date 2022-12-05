function ListNode(x){
    this.val = x
    this.next = null
}

let head = new ListNode(1)
let p1 = new ListNode(2)
let p2 = new ListNode(3)
let p3 = new ListNode(4)
let p4 = new ListNode(5)
head.next = p1
p1.next = p2
p2.next = p3
p3.next = p4

console.log(head);

function reverseList(head,m,n){
    //局部翻转需要创建虚拟头节点
    let dummyNode = new ListNode(-1)
    dummyNode.next = head
    let pre = dummyNode

    //把pre放到局部翻转区域的前一部分
    for(let i=0;i<m-1;i++)
    pre=pre.next

    let cur = pre.next 

    for(let i=0;i<n-m;i++){
        let cur_next = cur.next
        cur.next = cur_next.next
        cur_next.next = pre.next
        pre.next = cur_next
    }
    return dummyNode.next
}

console.dir(reverseList(head,1,3),{depth:null});