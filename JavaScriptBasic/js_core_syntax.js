// 문자열 출력
console.log('Hello World!');

result = 35;
// 템플릿 리터럴을 사용해 문자열 내부에 변수를 포함
console.log(`정답은 ${result}입니다.`);

// 사칙연산
a = 7;
b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b)); // 몫만 남기기
console.log(a % b);

// 출력 시간 단축
let answer = '';
/* 
  여러 출력 결과를 한 줄에 하나씩 출력할 때 매번 console.log()를 실행하지 않고,
  하나의 문자열에 결과를 저장해서 한꺼번에 출력하는 것이 보통 더 빠르게 수행됨.
*/
for (let i = 0; i <= 100; i++) {
  answer += i + '\n';
}

console.log(answer);

// fs 모듈
/* 
  입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 활용
  예로 /dev/stdin 파일에 적힌 텍스트로 읽어오는 경우, 다음과 같이 코드 작성
  전체 텍스트를 읽어온 되에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환
*/ 
// readline 모듈모다는 fs를 이용해 파일 전체를 읽어들여 처리
let fs = require('fs');
let input = fs.readFileSync('../README.md').toString().split('\n');
console.log(input);

// readline 모듈
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input2 = [];
rl.on('line', function(line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
  input2.push(line);
}).on('close', function() {
  // 콘솔 입력창에서 Crtl + C 혹은 Crtl + D를 입력하면 호출(입력의 종료)
  console.log(input2);
  process.exit();
})

// 조건문
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
} else statementN

// 반복문
/*
  초기문이 존재한다면 초기문이 먼저 실행
  조건문이 참이라면 블록 내부 코드가 실행, 거짓이면 반복문이 종료
  블록 내부 코드가 실행된 뒤에 증감문이 실행
*/

for (초기문; 조건문; 증감문) {
  // statements
}

// 1부터 100까지 합 계산
let summary = 0;
for (let i = 0; i <= 100; i++) {
  summary += i;
}
console.log(summary);

// while 반복문
/*
  조건문이 참일 때 실행되는 반복문
  블록 내부 코드가 실행되기 전에 참 혹은 거짓 판단
*/
while(1) {
  console.log(true);
}

// Number, String 형태 변황
let a = '777';
let b = Number(a);
console.log(b) // 777

let c = 777;
let d = String(c);
console.log(d); // '777'

// reduce
/*
  배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 사용

  reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤 하나의 결과를 반환
  reducer의 형태: (accumulator, currentValue) => (반환값)
  - 배열의 각 원소를 하나씩 확인하여, 각 원소는 currentValue에 해당
  - 반환값은 그 이후에 원소에 대하여 accumulator에 저장
*/

let data = [5, 2, 9, 8, 4];
// minValue 구하기
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue);
// 원소의 합계 구하기
let sum = data.reduce((a, b) => a + b);
console.log(sum);

// 배열 초기화 방법
// 직접 값을 설정하여 초기화
let arr1 = [8, 1, 4, 5, 7];
// 길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arr2 = new Array(5).fill(0);

// 집합 자료형
/* 특정 원소의 등장 여부를 파악 */
let mySet = new Set(); // 집합 객체 생성

// 여러 개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

// 원소 5 제거
mySet.delete(5);
// 원소를 하나씩 출력
for (let item of mySet) console.log(item);

// 소수점 반올림
// 특정 실수에 대하여 toFixed()를 이용해 소수점 아래 둘째 자리까지 출력
let x = 123.456;
console.log(x.toFixed(2));