// 이진 탐색 알고리즘

/*
  순차 탐색 vs. 이진 탐색

  순차 탐색: 리스트 안에 있는 특정한 데이터를 찾기 위해 앞에서부터 하나씩 확인 / 시간 복잡도 O(N)
  이진 탐색: 정렬되어 있는 리스트에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐색 / 시간 복잡도 O(logN)
*/


// 이진 탐색 동작 방식

/*
  이진 탐색을 수행할 때는 시작점(left)와 끝점(end)을 기준으로 탐색 범위를 명시
  각 단계마다 탐색 범위가 반으로 감소하므로 로그(log) 복잡도를 가짐
*/


// 이진 탐색 문제 유형의 대표적인 사례

/*
  1. 매우 넓은(억 단위 이상) 탐색 범위에서 최적의 해를 찾아야 하는 경우
  2. 데이터를 정렬한 뒤에 다수의 쿼리(query)를 날려야 하는 경우
*/


// 이진 탐색 소스코드 구현(재귀함수)
function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  let mid = parseInt((start + end) / 2);

  if (arr[mid] == target) 
    return mid;
  else if (arr[mid] > target) 
    return binarySearch(arr, target, start, mid - 1);
  else 
    return binarySearch(arr, target, mid + 1, end);
}

let n = 10;
let target = 7;
arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let result = binarySearch(arr1, target, 0, n - 1);
if (result == -1) console.log('원소가 존재하지 않습니다.');
else console.log(`${result + 1}번째 원소입니다.`);


// 정렬된 배열에서 특정 원소의 개수 구하기

/*
  코딩 테스트에서는 정렬된 배열에서 값이 특정 범위에 해당하는 원소의 개수를 계산하는 것을 요구
  이러한 문제를 해결하기 위해 lowerBound() 함수와 upperBound() 함수를 사용
*/


// 하한선과 상한선 함수

/*
  lowerBound(arr, x): 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 가장 왼쪽 인덱스를 반환
  upperBound(arr, x): 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 가장 오른쪽 인덱스를 반환
*/

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}


// 정렬된 배열에서 특정 원소의 개수 구하기

/*
  countByRange(): 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수 계산
  앞서 정의한 lowerBound() 함수와 upperBound() 함수를 이용해 구현
*/
function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let arr2 = [1, 2, 3, 3, 3, 4, 4, 8, 9];
console.log(countByRange(arr2, 4, 4));
console.log(countByRange(arr2, -1, 3));