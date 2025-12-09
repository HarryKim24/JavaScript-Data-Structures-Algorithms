// 01타일 1904(실버3)

/*
  n번째 경우의 수
  1. n-2번째 경우에서 '00' 타일 붙이기
  2. n-1번째 경우에서 '1' 타일 붙이기
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

let dp = Array(1000001).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[n]);