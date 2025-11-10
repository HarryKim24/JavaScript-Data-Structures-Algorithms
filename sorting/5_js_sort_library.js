// JavaScript 정렬 라이브러리

/*
  JavaScript에서는 배열에 포함된 데이터를 정렬하는 sort() 함수를 제공
  최악의 경우 시간 복잡도 O(NlogN)을 보장
  만약, sort() 함수의 사용이 제한될 경우 병합 정렬과 같은 알고리즘 직접 구현
*/


// JavaScript 정렬 기준 함수(Compare Function)

/*
  JavaScript의 정렬 함수에서는 정렬 기준 함수를 사용
  두 개의 원소 a, b를 입력으로 받음
  1. 반환 값이 0보다 작은 경우 -> a가 우선순위가 높아, 앞에 위치
  2. 반환 값이 0보다 큰 경우 -> b가 우선순위가 높아, 앞에 위치
  3. 반환 값이 0인 경우 -> a와 b의 순서를 병경하지 않음
*/


// 정렬 기준 함수 참고 사항

/*
  정렬 기준 함수를 사용하지 않으면 각 원소는 문자열로 취급
  유니코드 값 순서대로 정렬
  항상 정렬 기준 함수를 명시
*/


// 정수에 대한 오름차순 정렬
let arr1 = [1, 8, 5, 9, 21, 3, 7, 2, 15];

function compare1(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}

arr1.sort(compare1);
console.log(arr1);


// 오름차순 간결한 예시
let arr2 = [1, 8, 5, 9, 21, 3, 7, 2, 15];

function compare2(a, b) {
  return a - b;
}

arr2.sort(compare2);
console.log(arr2);


// 내립차순
let arr3 = [1, 8, 5, 9, 21, 3, 7, 2, 15];

function compare3(a, b) {
  return b - a;
}

arr3.sort(compare3);
console.log(arr3);


// 문자열에 대한 오름차순 정렬

/*
  별도로 비교 함수를 사용하지 않으면, 유니코드 순으로 정렬
*/

let arr4 = ['fineapple', 'banana', 'durian', 'apple', 'carrot'];
arr4.sort();
console.log(arr4);


// 문자열에 대한 내림차순 정렬

let arr5 = ['fineapple', 'banana', 'durian', 'apple', 'carrot'];

function compare4(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}

arr5.sort(compare4);
console.log(arr5);


// 객체에 대하여 원하는 기준으로 오름차순 정렬

/*
  성적 점수가 높은 순으로 학생 데이터 나열
*/

let arr6 = [
  { name: '홍길동', score: 90 },
  { name: '김철수', score: 85 },
  { name: '박영희', score: 97 },
  { name: '신영철', score: 82 },
];

function compare5(a, b) {
  return b.score - a.score;
}

arr6.sort(compare5);
console.log(arr6);