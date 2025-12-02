// 잃어버린 괄호 1541(실버2)

/*
  뺄셈 연산자를 기준으로 스플릿
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[0].split('-');

let result = 0;

let first = arr[0].split('+');
for (let j = 0; j < first.length; j++) {
  result += Number(first[j]);
}

for (let i = 1; i < arr.length; i++) {
  let sum = 0;
  let plus = arr[i].split('+');
  for (let j = 0; j < plus.length; j++) {
    sum += Number(plus[j]);
  }
  result -= sum;
}

console.log(result);
