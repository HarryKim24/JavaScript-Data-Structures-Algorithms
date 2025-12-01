// 수 정렬하기2 2751(실버5)

/*
  자바스크립트 sort 정렬 시간복잡도는 O(N log N)으로 충분히 빠른 계산 가능
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let result = [];
for (let i = 1; i <= num; i++) {
  result.push(Number(input[i]));
}
result = result.sort((a, b) => a - b);
console.log(result.join('\n'));