class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  head() {
    return this.first;
  }

  tail() {}

  size() {
    if (this.first === undefined) return 0;

    let counter = 1;
    let currNode = this.first;
    while (currNode.nextNode !== null) {
      counter++;
      currNode = currNode.nextNode;
    }

    return counter;
  }

  prepend(value) {
    if (Object.keys(this).length === 0) {
      this.first = new Node(value);
      return;
    }

    const newFirst = new Node(value);
    newFirst.nextNode = this.first;
    this.first = newFirst;
  }

  append(value) {
    if (Object.keys(this).length === 0) {
      this.first = new Node(value);
      return;
    }

    let currNode = this.first;
    while (currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }
    currNode.nextNode = new Node(value);
  }
}

const ll = new LinkedList();
ll.prepend('cat');
ll.prepend('dog');
ll.prepend('fish');
ll.prepend('seagull');
console.log(ll);
console.log(ll.first.nextNode);
console.log(ll.size());
