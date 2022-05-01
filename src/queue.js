class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newElem = {value, next: null};
    if (!this.head) {
      this.head = newElem;
      this.tail = newElem;
    } else {
      this.tail.next = newElem;
      this.tail = this.tail.next;
    }
  }
  
  dequeue() {
    const firstInQ = this.head.value;

    this.head = this.head.next;

    return firstInQ;
  }
}

module.exports = {
  Queue
};