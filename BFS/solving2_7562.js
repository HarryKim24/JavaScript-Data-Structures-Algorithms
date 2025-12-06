// 나이트의 이동 7562(실버1)

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

let T = Number(input[0]);

const MOVES = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];


for (let line = 1; line <= T * 3; line += 3) {
  let len = Number(input[line]);
  let [x, y] = input[line + 1].split(' ').map(Number);
  let [a, b] = input[line + 2].split(' ').map(Number);

  let visited = [];
  for (let i = 0; i < len; i++) {
    visited[i] = [];
    for (let j = 0; j < len; j++) {
      visited[i][j] = 0;
    }
  }

  function bfs() {
    let queue = new Queue();
    queue.enqueue([x, y]);

    while (queue.getLength()) {
      let current = queue.dequeue();

      if (current[0] === a && current[1] === b)
        return visited[current[0]][current[1]];

      for (let next of MOVES) {
        let nx = current[0] + next[0];
        let ny = current[1] + next[1];

        if (nx < 0 || nx >= len || ny < 0 || ny >= len) continue;
        if (!visited[nx][ny]) {
          visited[nx][ny] = visited[current[0]][current[1]] + 1;
          queue.enqueue([nx, ny]);
        }
      }
    }
  }

  console.log(bfs());
}