// 나이순 정렬 10814(실버5)

/*
  sort 정렬
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  let [age, name] = input[i].split(' ');
  arr.push([Number(age), name]);
}

arr.sort((a, b) => {
  if (a[0] === b[0]) return 0;
  else return a[0] - b[0];
})

let result = arr.map(v => v.join(' ')).join('\n');
console.log(result);