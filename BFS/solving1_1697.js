// 숨바꼭질 1697(실버1)

/*
  BFS
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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

const MAX = 100001;
let [n, k] = input[0].split(' ').map(Number);
let visited = Array(MAX).fill(0);

function bfs() {
  let queue = new Queue();
  queue.enqueue(n);

  while(queue.getLength()) {
    let current = queue.dequeue();
    if (current == k) return visited[current];

    for (let next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next >= MAX) continue;
      if (!visited[next]) {
        visited[next] = visited[current] + 1;
        queue.enqueue(next);
      }
    }
  }
}
console.log(bfs());