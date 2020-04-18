var middleNode = function(head) {
  let length = 0;
  let first = head;
  while (head.next) {
    length++;
    head = head.next;
  }
  let mid = Math.ceil(length / 2);
  for (let i = 0; i < mid; i++) {
    first = first.next;
  }
  return first;
};
