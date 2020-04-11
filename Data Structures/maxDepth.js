var maxDepth = function(root) {
  if (!root) return 0;
  let L = maxDepth(root.left);
  let R = maxDepth(root.right);
  return Math.max(L, R) + 1;
};
