// 수들의 합 1789(실버5)

/*
  1부터 최대한 작은 수부터 더하기
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let s = Number(input[0]);
let sum = 0;
let n = 0;

while (sum <= s) {
  n += 1;
  sum += n;
}

console.log(n - 1);