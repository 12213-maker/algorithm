
//用js来实现一个链表

//构造节点
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

//创建链表
class LinkedPropotype {
    constructor() {
        this.head = null
    }
    //构造节点
    create(data) {
        let node = new Node(data)
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }

    //删除节点
    deletenode(index) {
        let p = this.head
        let k = p
        let len = 0
        while (p) {
            k = p
            p = p.next
            len++
        }
        if (index < 0 || index > len) {
            console.log('删除超出范围');
            return;
        }

        let q = this.head
        let l = q
        //删除头节点
        if (index == 0) {
            this.head = this.head.next
            return q.data
        }
        //删除中间节点
        else if (index < len) {
            while (index) {
                l = q
                q = q.next
                index--
            }
            let deletenum = q.data
            l.next = q.next
            return deletenum
        }
        //删除尾节点
        else {
            k.next = null
            return p
        }
    }

    //查找节点
    searchnode(index){
        let p = this.head
        let k = p
        let len = 0
        while (p) {
            k = p
            p = p.next
            len++
        }
        if (index < 0 || index > len) {
            console.log('查找超出范围');
            return;
        }
        p = this.head
        while(index){
            index--
            p = p.next
        }
        return p
    }

    //修改节点
    editnode(index,data){
        let p = this.head
        let k = p
        let len = 0
        while (p) {
            k = p
            p = p.next
            len++
        }
        if (index < 0 || index > len) {
            console.log('修改超出范围');
            return;
        }
        p = this.head
        while(index){
            index--
            p = p.next
        }
        p.data = data
    }

}

let linknode = new LinkedPropotype()
linknode.create(1)
linknode.create(2)
linknode.create(3)
linknode.create(4)
linknode.create(5)
linknode.create(6)
linknode.create(7)
linknode.create(8)


var C = linknode.searchnode(4)
var G = linknode.searchnode(7)
G.next = C

//使用  快慢指针  来判断有没有环
let isCircle = (link)=>{
    let p = link.head
    let q = link.head

    //快指针走完就没有必要再进行判断了
    while(q&&q.next){
        p = p.next
        q = q.next.next
        if(p === q){
            console.log('此链表循环');
            return;
        }
    }
    console.log('此链表不循环');
}

//变式一 : 求环的长度
let lengthOfLink = (link)=>{
    let p = link.head
    let q = link.head
    let flag= 0
    let count = 0
    while(q&&q.next){
        p = p.next
        q = q.next.next
        count++
        if(p===q){
            flag++
            if(flag==1)count = 0
            if(flag==2){
                return (2-1)*count
            }
        }
    }

}

//变式二 : 求环的切入点
let pointLink = (link)=>{
    let p = link.head
    let q = link.head
    let flag=0 
    let count = 0
    while(q&&q.next){
        p = p.next
        if(flag==0)
        q = q.next.next
        else 
        {
            q = q.next
            count++
        }
        if(p===q&&flag==0){
            q = link.head
            flag=1
        }
        if(p===q&&flag==1){
            return count
        }
    }

}



isCircle(linknode)

console.log('环的长度是',lengthOfLink(linknode));
console.log('环的切入点是',pointLink(linknode));
