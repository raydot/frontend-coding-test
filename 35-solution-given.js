// Linked lists have been my white whale.  Skipping right to the answer key on this one.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0; // This doesn't do anything
    this.current_node = null;
  }

  // Not needed to solve the problem
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  add(data) {
    var current_node;

    var new_node = new Node(data);

    if (this.head === null) {
      this.head = new_node;
      this.current_node = new_node;
    } else {
      this.current_node.next = new_node;
      this.current_node = new_node;
    }
  }

  reverseList() {
    if (!this.head.next) {
      console.log("Single element linked list found");
      return;
    }

    var previous = null;
    var current = this.head;
    var next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  display() {
    var new_node;
    new_node = this.head;
    var str = "";

    if (new_node === null) {
      console.warn("Empty list!  No data to print");
      return;
    }

    while (new_node !== null) {
      str = str + new_node.data + "->";
      new_node = new_node.next;
    }
    str = str + "null";
    console.log(str);
  }
}

var sll = new LinkedList();
sll.add(1);
sll.add(2);
sll.add(3);
sll.add(4);
sll.add(5);
sll.add(6);

sll.display();
sll.reverseList();
sll.display();
sll.reverseList();
sll.display();

console.log(sll.size());
