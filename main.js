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

  tail() {
    if (this.first === undefined) return {};

    let currNode = this.first;
    while (currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }

    return currNode;
  }

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

  at(index) {
    const size = this.size();
    if (size === 0) return 'empty';
    if (index > size - 1) return 'index out of range';
    if (index === 0) return this.first;

    let counter = 0;
    let currNode = this.first;
    while (counter !== index) {
      counter++;
      currNode = currNode.nextNode;
    }

    return currNode;
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
ll.append('cat');
ll.append('dog');
ll.append('fish');
ll.append('seagull');

console.log(ll.at(5));
