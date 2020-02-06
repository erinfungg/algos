class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //add node to tail
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let currNode = this.tail;
      currNode.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //remove last node
  pop() {
    let currNode = this.head;
    if (!this.head) return undefined;
    while (currNode) {
      if (currNode.next.next === null) {
        let val = currNode.next.val;
        currNode.next = null;
        this.length--;
        return val;
      }
      currNode = currNode.next;
    }
  }
}

let list = new LinkedList();
list.push(80);
list.push(81);
list.push(82);
list.pop();

console.log(list.head);
