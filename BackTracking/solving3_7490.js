// 0 만들기 7490(골드5)

/*
  백트래킹
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);
let line = 1;

while (T) {
  let n = Number(input[line]);

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  function dfs(result, depth) {
    if (depth == n - 1) {
      let str = '';
      for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
      str += arr[n - 1] + '';
      let sum = eval(str.split(' ').join(''));
      if (sum == 0) console.log(str);
      return;
    }

    for (let x of [' ', '+', '-']) {
      result.push(x);
      dfs(result, depth + 1);
      result.pop();
    }
  }

  dfs([], 0);
  if (T !== 1) {
    console.log();
  }

  line++;
  T--;
}