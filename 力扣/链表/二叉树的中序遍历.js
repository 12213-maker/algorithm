
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    //中序遍历：左根右
    //无论是什么遍历，都是先访问根节点，在访问它的左子树，在访问她的右子树
    //那他们的区别在哪里？
    //比如说中序遍历，它是将处理当前节点放在了访问完它的左子树之后
    let result = []
    const inorder = (root)=>{
        if(root==null){
            return;
        }
        inorder(root.left)
        result.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return result
};