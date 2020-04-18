function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  let newHead = new Node();
  if (l1.val <= l2.val) {
    newHead = l1;
    l1 = l1.next;
  } else {
    newHead = l2;
    l2 = l2.next;
  }
  let curr = newHead;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      curr = curr.next;
      l1 = l1.next;
    } else if (l2.val < l1.val) {
      curr.next = l2;
      curr = curr.next;
      l2 = l2.next;
    }
  }
  if (!l1) curr.next = l2;
  if (!l2) curr.next = l1;
  return newHead;
}

let l1 = new Node(1, new Node(2, new Node(4)));
let l2 = new Node(1, new Node(3, new Node(4)));

console.log(mergeTwoLists(l1, l2)); //1 -> 1 -> 2 -> 3 -> 4 -> 4
