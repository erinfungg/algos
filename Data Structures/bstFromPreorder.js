/*Return the root node of a binary search tree that matches the given preorder traversal.*/

function bstFromPreorder(preorder) {
  let root = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    insert(root, preorder[i]);
  }
  return root;
}

function insert(root, val) {
  let node = new TreeNode(val);
  let curr = root;
  while (curr) {
    if (val < curr.val) {
      if (curr.left) curr = curr.left;
      else {
        curr.left = node;
        return;
      }
    } else {
      if (curr.right) curr = curr.right;
      else {
        curr.right = node;
        return;
      }
    }
  }
}
