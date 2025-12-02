// 설탕 배달 2839(실버4)

/*
  값이 5로 나누어 떨어지는 경우, 5로 나누기
  값이 5로 나누어 떨어지지 않으면 5로 나누어 떨어질 때까지 3을 빼기
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let cnt = 0;
let flag = false;

while(n >= 0) {
  if (n == 0 || n % 5 == 0) {
    cnt += Math.floor(n / 5);
    console.log(cnt);
    flag = true;
    break;
  }
  n -= 3;
  cnt++;
}

if (!flag) {
  console.log(-1);
}