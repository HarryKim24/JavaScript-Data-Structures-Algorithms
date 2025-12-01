// 수 정렬하기 2750(브론즈2)

/*
  for문과 sort 메서드로 간단히 해결
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