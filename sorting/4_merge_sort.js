// 병합 정렬

/*
  병합 정렬은 전형적인 분할 정복(divide and conquer) 알고리즘 
  분할 정복은 일반적으로 재귀 함수를 이용하여 구현
  재귀 함수를 사용한다는 점에서 함수 호출 횟수가 많아지면 오버헤드(overhead) 발생 가능
  시간 복잡도 O(NlogN)을 보장하는 빠른 정렬 알고리즘
*/


// 분할 정복

/*
  1. 분할(divide): 큰 문제를 작은 부분 문제(쉬운 문제)로 분할
  2. 정복(conquer): 작은 부분 문제를 각각 해결
  3. 조합(combine): 해결한 부분 문제의 답을 이용하여 다시 큰 문제를 해결
*/


// 병합 정렬의 동작 방식

/*
  1. 분할: 정렬할 배열(큰 문제)을 같은 크기의 부분 배열(작은 문제) 2개로 분할
  2. 정복: 부분 배열을 정렬. (작은 문제를 해결)
    - 각 부분 배열은 이미 정렬된 상태
    - 각 부분 배열에 대항 첫째 원소부터 시작하여 하나씩 확인
    - 총 원소의 개수가 N개일 때, O(N)의 시간 복잡도 요구
  3. 조합: 정렬된 부분 배열을 하나의 배열로 다시 병합
*/


// 병랍 정렬의 시간 복잡도

/*
  직관적으로, 높이가 O(logN)이고, 너비가 O(N)인 정사각형과 유사
  최악의 경우 시간 복잡도는 O(NlogN)
  장점: 최악의 경우에도 O(NlogN)을 보장한다는 점에서 효율적
  단점: 일반적인 경우, 정복 과정에서 임시 배열이 필요
*/


// 병합 수행 함수
function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; // 결과 배열의 인덱스
  
  while(i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  // 왼쪽 배열에 대한 처리가 다 끝난 경우
  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j]; 
  }
  // 오른쪽 배열에 대한 처리가 다 끝난 경우
  else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }
  // 정렬된 배열 결과를 원본 배열에 반영
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}


// 병합 정렬 함수
function mergeSort(arr, left, right) {
  // 원소가 1개인 경우, 해당 배열은 정렬이 된 상태로 이해 가능
  if (left < right) {
    // 원소가 2개 이상이라면
    let mid = parseInt((left + right) / 2); // 2개의 부분 배열로 분할(divide)
    mergeSort(arr, left, mid); // 왼쪽 부분 배열 정렬 수행(conquer)
    mergeSort(arr, mid + 1, right); //오른쪽 부분 배열 정렬 수행(conquer)
    merge(arr, left, mid, right); // 정렬된 2개의 배열을 하나로 병합(combine)
  }
}


// 벙합 정렬의 수행 시간 측정
let arr1 = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));

startTime = new Date().getTime();
sorted = Array.from({ length: arr1.length }, () => 0);
mergeSort(arr1, 0, arr1.length - 1);
endTime = new Date().getTime();

console.log('병합 정렬 소요 시간:', endTime - startTime, 'ms.');


// 이미 정렬된 병합 정렬의 수행 시간 측정
let arr2 = Array.from({ length: 100000 }, () => 7);
startTime = new Date().getTime();
sorted = Array.from({ length: arr2.length }, () => 0);
endTime = new Date().getTime();

console.log('정렬된 병합 정렬 소요 시간:', endTime - startTime, 'ms.');