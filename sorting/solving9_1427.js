// 소트인사이드 1427(실버5)

/*
  sort 내립차순 정렬
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[0].split('').map(Number);
arr.sort((a, b) => b - a);

console.log(arr.join(''));