class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isLoop(head) {
  let tort = head.next;
  let hare = head.next.next;
  while (tort !== hare) {
    tort = tort.next;
    hare = hare.next.next;
  }
  tort = head;
  while (tort !== hare) {
    tort = tort.next;
    hare = hare.next;
  }
  return tort;
}
