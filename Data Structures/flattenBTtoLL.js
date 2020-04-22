/*Given a binary tree, flatten it to a linked list in-place.*/

var flatten = function(root) {
  if (!root) return;
  flatten(root.left);
  flatten(root.right);
  if (root.left) {
    let rNode = root.left;
    while (rNode.right) rNode = rNode.right;
    rNode.right = root.right;
    root.right = root.left;
    root.left = null;
  }
};
