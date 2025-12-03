// 랜선 자르기 1654(실버2)

/*
  이진 탐색
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [k, n] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= k; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

let start = 1;
let end = arr[k - 1];
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += Math.floor(arr[i] / mid);
  }
  if (sum >= n) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);