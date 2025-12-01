// 단어 정렬 18870(실버2)

/*
  set 자료형으로 중복 제거
  Map으로 매핑 수행
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let sortedArr = [...new Set(arr)].sort((a, b) => a - b);

let map = new Map();
for (let i = 0; i < sortedArr.length; i++) {
  map.set(sortedArr[i], i);
}

let result = arr.map(v => map.get(v));

console.log(result.join(' '));
