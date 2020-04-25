/*Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.*/

function rightSideView(root, depth = 0, arr = []) {
  if (!root) return arr;
  arr[depth] = root.val;
  depth++;
  if (root.left) rightSideView(root.left, depth, arr);
  if (root.right) rightSideView(root.right, depth, arr);
  return arr;
}
