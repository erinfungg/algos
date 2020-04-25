/*Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).*/

function levelOrder(root, level = 0, arr = []) {
  if (!root) return arr;
  if (!arr[level]) arr[level] = [root.val];
  else arr[level].push(root.val);
  levelOrder(root.left, level + 1, arr);
  levelOrder(root.right, level + 1, arr);
  return arr;
}
