/*Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.*/

function rightSideView(root, depth = 0, arr = []) {
  if (!root) return arr;
  if (!arr[depth]) arr[depth] = root.val;
  rightSideView(root.right, depth + 1, arr);
  rightSideView(root.left, depth + 1, arr);
  return arr;
}
