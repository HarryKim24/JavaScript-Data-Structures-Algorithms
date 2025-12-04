// N과 M (1) 15649(실버3)

/*
  백트래킹
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let visited = Array(n).fill(false);
let selected = [];
let answer = '';

function bfs(arr, depth) {
  if (depth == m) {
    answer += selected.join(' ') + '\n';
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(arr[i]);
    visited[i] = true;
    bfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
bfs(arr, 0)
console.log(answer);