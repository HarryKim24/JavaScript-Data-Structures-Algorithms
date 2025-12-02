// 신입사원 1946(실버1)

/*
  우선 한 심사 기준으로 오름차순 정렬 뒤에
  루프하면서 다른 심사를 비교하여 확인
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(' ').map(Number);
    arr.push(data);
  }
  arr.sort((x, y) => x[0] - y[0]);
  let cnt = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      cnt++;
    }
  }
  console.log(cnt);
  line += n + 1;
}