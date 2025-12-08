// 피보나치 함수 1003(실버3)

/*
  fibo(n)을 호출시
  0 출력 횟수 = fibo(n-1)
  1 출력 횟수 = fibo(n)
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;

for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

let T = Number(input[0]);

for (let t = 1; t <= T; t++) {
  let n = Number(input[t]);
  if (n == 0) console.log(1, 0);
  else console.log(d[n - 1], d[n]);
}
