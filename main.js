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

  prepend(value) {}

  append(value) {
    if (Object.getOwnPropertyNames(this).length === 0) {
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
console.log(ll);
console.log(ll.first.nextNode);
