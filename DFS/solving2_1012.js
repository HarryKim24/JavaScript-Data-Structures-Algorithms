// 유기농 배추 1012(실버2)

/*
  DFS
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);
let line = 1;

while (T--) {
  let [m, n ,k] = input[line].split(' ').map(Number);
  let graph = [];
  for (let i = 0; i < n; i++) graph[i] = Array(m);

  for (let i = 1; i <= k; i++) {
    let [x, y] = input[line + i].split(' ').map(Number);
    graph[y][x] = 1;
  }

  function dfs(x, y) {
    if (x < 0 || x >= n || y < 0 || y >= m) return;
    if (graph[x][y] === 1) {
      graph[x][y] = -1;

      dfs(x - 1, y);
      dfs(x + 1, y);
      dfs(x, y - 1);
      dfs(x, y + 1);
    }
  }

  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        cnt++;
      }
    }
  }

  console.log(cnt);
  line += k + 1;
}
