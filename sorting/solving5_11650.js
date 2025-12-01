// 좌표 정렬하기 11650(실버5)

/*
  x좌표 증가 순 정렬 -> x좌표가 같으면 y좌표 증가 순 정렬
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}
arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let result = arr.map(v => v.join(' ')).join('\n');
console.log(result);