// 세수정렬 2752(브론즈4)

/*
  자바스크립트 sort 메서드로 간단히 해결
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let arr = input.map(Number);
arr.sort((a, b) => a - b);

console.log(arr.join(' '));