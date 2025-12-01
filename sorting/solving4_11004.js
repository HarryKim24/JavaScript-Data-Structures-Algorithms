// K번째 수 11004(실버5)

/*
  sort 메서드로 해결
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
arr = arr.sort((a, b) => a - b);
console.log(arr[K - 1]);