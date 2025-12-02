// ATM 11399(실버4)

/*
  시간이 적게 소요되는 사람 순으로 오름차순 정렬
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i] * (arr.length - i);
}

console.log(sum);