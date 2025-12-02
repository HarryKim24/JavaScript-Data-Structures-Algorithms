// A -> B 16953(실버2)

/*
  바꾸려는 수 부터 역산
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let cnt = 0;

while(b > a) {
  if (b % 10 == 1) {
    b = Math.floor(b / 10);
  } else if (b % 2 == 0) {
    b /= 2;
  } else {
    break;
  }
  cnt++;
}

if (b == a) console.log(cnt + 1);
else console.log(-1);
