// 포도주 시식 2156(실버1)

/*
  dp[i] = i번째 포도주까지의 최적의 해(최댓값)

  1. i번째 포도주를 마시지 않는 경우
    1-1. dp[i] = dp[i - 1]
        (i-1번째까지 최적의 해)
  2. i번째 포도주를 마시는 경우
    2-1. dp[i] = arr[i] + dp[i - 2]
        (i번째 포도주 + i-2번째까지 최적의 해)
    2-2. dp[i] = arr[i] + arr[i - 1] + dp[i - 3]
        (i번째 포도주 + i-1번째 포도주 + i-3번째까지 최적의 해)

  위 세 가지 경우 중에서 최댓값이 최적의 해가 됨
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr  = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let dp = Array(n).fill(0);
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < n; i++) {
  dp[i] = dp[i - 1];
  dp[i] = Math.max(dp[i], arr[i] + dp[i - 2]);
  dp[i] = Math.max(dp[i], arr[i] + arr[i - 1] + dp[i - 3]);
}
console.log(dp[n - 1]);