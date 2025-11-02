// 큐

/**
  큐(queue)는 먼저 삽입된 데이터가 먼저 추출되는 자료구조
 */

// 연결 리스트로 큐 구현

/*
  큐를 연결 리스트로 구현하면, 삽입과 삭제에 있어서 O(1)을 보장
  머리(head): 남아있는 원소 중 가장 먼저 들어온 데이터를 가리키는 포인터
  꼬리(tail): 남아있는 원소 중 가장 마지막에 들어온 데이터를 가리키는 포인터
*/

// JavaScript 큐(Queue) 구현하기
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

while (queue.getLength() != 0) {
  console.log(queue.dequeue());
}