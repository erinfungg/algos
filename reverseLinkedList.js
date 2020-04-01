function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var reverseList = function(head, newHead = null) {
  if (!head) return newHead;
  const newNode = new ListNode(head.val, newHead);
  return reverseList(head.next, newNode);
};

const list = new ListNode(1, new ListNode(2, new ListNode(3)));

console.log(reverseList(list)); // 3 --> 2 --> 1 --> null
