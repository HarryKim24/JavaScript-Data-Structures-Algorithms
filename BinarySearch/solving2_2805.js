// 나무 자르기 2805(실버2)

/*
  이진 탐색
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

function binarySearch(start, end, best) {
  if (start > end) return best;
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i] >= mid ? arr[i] - mid : 0;
  }
  
  if (sum >= m) {
    best = mid;
    return binarySearch(mid + 1, end, best);
  } else {
    return binarySearch(start, mid - 1, best);
  }
}

let result = binarySearch(0, arr[n - 1], 0);
console.log(result);