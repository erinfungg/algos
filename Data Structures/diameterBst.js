var diameterOfBinaryTree = function(root, self = 1) {
  function depth(node) {
    if (!node) return 0;
    let L = depth(node.left);
    let R = depth(node.right);
    self = Math.max(self, L + R + 1);
    return Math.max(L, R) + 1;
  }
  depth(root);
  return self - 1;
};
