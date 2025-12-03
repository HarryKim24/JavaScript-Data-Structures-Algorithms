// 예산 2512(실버2)

/*
  이진 탐색
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let M = Number(input[2]);

function binarySearch(target, start, end) {
  if (start > end) return target;
  
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += arr[i] > mid ? mid : arr[i];
  }

  if (sum <= M) {
    target = mid;
    return binarySearch(target, mid + 1, end);
  } 
  else return binarySearch(target, start, mid - 1);
}

let result = binarySearch(0, 0, arr[N - 1]);

console.log(result);