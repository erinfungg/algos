/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.*/
function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  const list = new Node(0);
  let curr = list;
  let sum = 0;
  let carry = 0;
  while (l1 || l2 || sum !== 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      sum = sum - 10;
      carry++;
    }

    let node = new Node(sum);
    curr.next = node;
    curr = node;
    sum = carry;
    carry = 0;
  }
  return list.next;
}

let l1 = new Node(2, new Node(4, new Node(3)));
let l2 = new Node(5, new Node(6, new Node(4)));

console.log(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8
