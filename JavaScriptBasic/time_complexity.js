/* 시간 복잡도 예시 1) */

// N개의 데이터의 합을 계산하는 프로그램 예제
let array1 = [3, 5, 1, 2, 4]; // 5개의 데이터 (N = 5)
let summary1 = 0; // 합계를 저장할 변수

// 모든 데이터를 하나씩 확인하면 합계를 계산
for (let i = 0; i < array1.length; i++) {
  summary1 += array1[i];
}

console.log('시간 복잡도 예시 1', summary1);
// 수행 시간은 데이터의 개수 N에 비례
// 시간 복잡도 : O(N)


/* 시간 복잡도 예시 2) */

// 2중 반복 문법을 이용하는 프로그램 예제
let array2 = [3, 5, 1, 2, 4]; // 5개의 데이터 (N = 5)

for (let i = 0; i < array2.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    let temp = array2[i] * array2[j];
    console.log('시간 복잡도 예시 2', temp);
  }
}
// 시간 복잡도 : O(N^2)
// 모든 2중 반복 문법의 시간 복잡도가 O(N**2)인 것은 아니다
// 소스 코드가 내부적으로 다른 함수를 호출하면 그 함수도 고려