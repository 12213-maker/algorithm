/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 //一个树的深度是由左子树与右子树中的最大值+1
 var isBalanced = function(root) {
  let flag = true
  if(!root){
      return true
  }
  function findHeight(root1){
      if(!root1){
          return 0;
      }
      let leftHeight = 0
      let rightHeight = 0
      if(root1.left){
          leftHeight = findHeight(root1.left)
      }
      if(root1.right){
          rightHeight = findHeight(root1.right)
      }
      if(Math.abs(leftHeight-rightHeight)>1){
          flag = false
      }
      return Math.max(leftHeight,rightHeight)+1
  }
  console.log(findHeight(root))
  return flag
};