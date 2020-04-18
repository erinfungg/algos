class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let currNode = this.root;
    while (currNode) {
      if (val === currNode.val) return null;
      if (val < currNode.val) {
        if (!currNode.left) {
          currNode.left = node;
          return this;
        }
        currNode = currNode.left;
      } else if (val > currNode.val) {
        if (!currNode.right) {
          currNode.right = node;
          return this;
        }
        currNode = currNode.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let currNode = this.root;
    while (currNode) {
      if (currNode.val === val) return true;
      else if (val < currNode.val) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return false;
  }
}

let tree = new BST();
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(7);
tree.insert(1);
tree.insert(9);
console.log(tree.find(100));
