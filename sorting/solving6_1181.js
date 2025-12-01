// 단어 정렬 1181(실버5)

/*
  집합(set) 자료형으로 중복 해결
  문자열 사전순 정렬 방법
    1. a.localeCompare(b)
    2. a > b ? 1 : -1;
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}
arr = [...new Set(arr)];
arr.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
  return a.length - b.length;
})
console.log(arr.join('\n'));