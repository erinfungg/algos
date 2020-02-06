class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class LRUCache {
  constructor(maxSize) {
    this.cache = {};
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.maxSize = maxSize;
    this.currSize = 0;
  }

  addToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    node.next.prev = node;
    this.head.next = node;
  }

  deleteNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insertKeyValuePair(key, value) {
    // Write your code here.
    if (key in this.cache) {
      this.cache[key].val = value;
      this.deleteNode(this.cache[key]);
      this.addToHead(this.cache[key]);
    } else {
      let newNode = new Node(key, value);
      if (this.currSize < this.maxSize) this.currSize++;
      else {
        delete this.cache[this.tail.prev.key];
        this.deleteNode(this.tail.prev);
      }
      this.addToHead(newNode);
      this.cache[key] = newNode;
    }
  }

  getValueFromKey(key) {
    // Write your code here.
    if (key in this.cache) {
      this.deleteNode(this.cache[key]);
      this.addToHead(this.cache[key]);
      return this.cache[key].val;
    }
    return null;
  }

  getMostRecentKey() {
    // Write your code here.
    return this.head.next.key;
  }
}

let lruCache = new LRUCache(2);
lruCache.insertKeyValuePair(1);
lruCache.insertKeyValuePair(4);
console.log(lruCache.getMostRecentKey() === 4);
lruCache.insertKeyValuePair(5);
console.log(lruCache.getMostRecentKey() === 5);
console.log(lruCache.getValueFromKey(1) === null);
