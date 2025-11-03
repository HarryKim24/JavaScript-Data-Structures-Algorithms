// 삽입 정렬

/*
  삽입 정렬이란 각 원소를 적절한 위치에 삽입하는 정렬 기법
  매 단계에서 현재 처리 중인 원소가 삽입될 위치를 찾기 위해 N번의 연산 필요
  결과적으로 약 N개의 단계를 거친다는 점에서 최악의 경우 O(N^2)의 시간복잡도를 가짐
*/


// 삽입 정렬 동작 방식

/*
  1. 각 단계에서 현재 원소가 삽입될 위치를 찾는 과정
  2. 적절한 위치에 도달할 때까지 반복적으로 왼쪽으로 이동
*/


// 삽입 정렬 함수
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}


// 삽입 정렬의 수행 시간 측정
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

let startTime = new Date().getTime();
insertionSort(arr);
let endTime = new Date().getTime();

console.log('삽입 정렬 소요 시간:', endTime - startTime, 'ms.');

let arr1 = Array.from({ length: 30000 }, () => 7);

let startTime1 = new Date().getTime();
insertionSort(arr1);
let endTime1 = new Date().getTime();

console.log('정렬된 배열에 대한 삽입 정렬 소요 시간:', endTime1 - startTime1, 'ms.');