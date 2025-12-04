// 모든 순열 10974(실버3)

/*
  백트래킹
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
let visited = Array(n).fill(false);
let selected = [];
let result = '';

function dfs(arr, depth) {
  if (depth == n) {
    result += selected.join(' ') + '\n';
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    selected.push(arr[i]);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0);
console.log(result);