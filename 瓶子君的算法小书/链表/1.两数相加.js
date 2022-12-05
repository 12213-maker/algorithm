
//实现传入两个数组，返回链表形式的数组和
function outAll(nums1, nums2) {
    //创建链表的节点
    function ListNode(value, next) {
        this.value = value || 0
        this.next = next || null
    }

    //传入数组创建链表
    const create_link = (nums) => {
        let head = new ListNode(nums[nums.length - 1])
        let pre = head
        for (let i = nums.length - 2; i >= 0; i--) {
            let cur = new ListNode(nums[i], pre)
            pre = cur
        }
        return pre
    }

    //计算两个链表之和
    const sum_link = (l1, l2) => {
        let p1 = l1, p2 = l2
        let updata = 0

        let result = new ListNode()
        let l = result
        while (p1 && p2) {
            //计算当前sum
            let sum = p1.val + p2.val + updata
            let steady = sum % 10
            cur = new ListNode(steady)
            l.next = cur
            l = cur
            updata = Math.floor(sum / 10)
            p1 = p1.next
            p2 = p2.next
        }
        while (p1) {
            let sum = p1.val + updata
            let steady = sum % 10
            cur = new ListNode(steady)
            l.next = cur
            l = cur
            updata = Math.floor(sum / 10)
            p1 = p1.next
        }
        while (p2) {
            let sum = p2.val + updata
            let steady = sum % 10
            cur = new ListNode(steady)
            l.next = cur
            l = cur
            updata = Math.floor(sum / 10)
            p2 = p2.next
        }
        if (updata) {
            cur = new ListNode(1)
            l.next = cur
        }

        return result.next
    }

    let l1 = create_link(nums1), l2 = create_link(nums2)
    return sum_link(l1,l2)
}


let l1 = [2, 4, 3], l2 = [5, 6, 4]
console.log(JSON.stringify(outAll(l1, l2)));