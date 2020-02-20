function copyRandomList(head) {
  if (!head) return null;
  let newHead = new Node(head.val);
  let curr = head.next;
  let newCurr = newHead;
  let map = new Map();
  map.set(head, newHead);
  while (curr) {
    newCurr.next = new Node(curr.val);
    newCurr = newCurr.next;
    map.set(curr, newCurr);
    curr = curr.next;
  }
  curr = head;
  newCurr = newHead;
  while (newCurr) {
    if (curr.random) {
      let randNode = curr.random;
      newCurr.random = map.get(randNode);
    } else {
      newCurr.random = null;
    }
    curr = curr.next;
    newCurr = newCurr.next;
  }
  return newHead;
}
