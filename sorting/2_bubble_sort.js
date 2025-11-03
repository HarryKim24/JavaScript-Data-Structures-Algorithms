// 버블 정렬

/*
  서로 인접한 두 원소를 확인하여, 정렬인 안되어있다면 위치를 서로 변경
  시간 복잡도 O(N^2)로 비효율적인 정렬 알고리즘
*/


// 버블 정렬 동작 방식

/*
  1. 각 단계에서 인접한 두 개의 원소를 비교하여, 필요시 위치를 변경
  2. 한 번의 단계가 수행되면, 가장 큰 원소가 맨 뒤로 이동
  3. 다음 단계에서는 맨 뒤로 이동한 데이터는 정렬에서 제외
  4. 첫째와 둘째를 비교, 둘째와 셋째를 비교, 셋째와 넷째를 비교하는 방식
*/



// 버블 정렬 함수
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}


// 버블 정렬의 수행 시간 측정
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

let startTime = new Date().getTime();
bubbleSort(arr);
let endTime = new Date().getTime();

console.log('버블 정렬 소요 시간:', endTime - startTime, 'ms.');

let arr1 = Array.from({ length: 30000 }, () => 7);

let startTime1 = new Date().getTime();
bubbleSort(arr1);
let endTime1 = new Date().getTime();

console.log('정렬된 배열에 대한 버블 정렬 소요 시간:', endTime1 - startTime1, 'ms.');