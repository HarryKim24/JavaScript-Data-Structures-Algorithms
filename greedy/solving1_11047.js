// 동전 0 11047(실버4)

/*
  가장 큰 화폐 단위부터 먼저 거슬러주기
  내림차순 정렬
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);
let arr = [];
let cnt = 0;

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => b - a);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= K) {
    cnt += Math.floor(K / arr[i]);
    K %= arr[i];
  }
}

console.log(cnt);