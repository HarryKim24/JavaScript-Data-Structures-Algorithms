// 선택 정렬

/*
  매 단계에서 가장 작은 원소를 선택해 앞으로 보내는 정렬 방식
  앞으로 보내진 원소는 더이상 위치가 변경되지 않음
  시간 복잡도 O(N^2)로 비효율적인 정렬 알고리즘
*/


// 선택 정렬 동작 방식

/*
  1. 각 단계에서 가장 작은 원소를 선택
  2. 현재까지 처리되지 않은 원소들 중 가장 앞의 원소와 위치를교체
*/


// 선택 정렬 함수
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // 스와프(swap)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}


// 선택 정렬의 수행 시간 측정
// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

// 시간차 출력
console.log('선택 정렬 소요 시간:', endTime - startTime, 'ms.');

// 이미 정렬된 배열에 대한 선택 정렬의 수행 시간 측정
let arr1 = Array.from({ length: 30000 }, () => 7);

let startTime1 = new Date().getTime();
selectionSort(arr1);
let endTime1 = new Date().getTime();

console.log('정렬된 배열에 대한 선택 정렬 소요 시간:', endTime1 - startTime1, 'ms.');