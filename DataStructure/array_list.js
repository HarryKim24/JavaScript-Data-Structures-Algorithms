// 배열

/*
  여러 개의 변수를 담는 공간
  배열은 인덱스(index)가 존재하며, 인덱스는 0부터 시작
  특정 인덱스에 직접적으로 접근 가능
  컴퓨터의 메인 메모리에서 배열의 공간은 연속적으로 할당

  장점: 캐시(cache) 히트 가능성이 높고, 조회가 빠르다
  단점: 배열의 크기를 미리 지정해야 하는 것이 일반적, 데이터의 추가 및 삭제에 한계
*/

// 연결 리스트

/*
  연결 리스트는 컴퓨터의 메인 메모리상에서 주소가 불연속적
  리스트의 크기는 동적으로 변경 가능

  장점: 포인터를 통해 다음 데이터의 위치를 가리킴, 삽입과 삭제가 간편
  단점: 특정 번째의 원소를 검색할 때 앞에서부터 찾아야 하므로, 데이터 검색 속도가 느림
*/

// JavaScript의 배열

/*
  JavaScript의 배열 자료형은 동적 배열
  배열의 용량이 가득 차면, 자동으로 크기 증가
  내부적으로 포인터를 사용하여, 연결 리스트의 장점도 가짐
  배열 또는 스택의 기능이 필요할 때 사용 가능
  큐의 기능을 제공하지는 못함(비효율적)
*/

// 빈 배열 생성
let arr = []; // let arr = new Array();

arr.push(7);
arr.push(8);
arr.push(9);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 임의의 크기를 가지는 배열 생성
let arr1 = [0, 1, 2, 3, 4];

// 하나의 값으로 초기화
let arr2 = Array.from({ length: 5 }, () => 7);

// 2차원 배열
let arr3 = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
]

// 2차원 배열 초기화
let arr4 = Array.from(Array(4), () => new Array(5));

// 동적 배열
let arr5 = [5, 6, 7, 8];
arr5[7] = 3;
arr5.push(1);

// concat(): 여러 개의 배열을 이어 붙여서 합친 결과를 반환 O(N)
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let arr8 = arr6.concat(arr7, [7, 8], [9]);

// slice(left, right): 특정 구간의 원소를 꺼낸 배열 반환
let arr9 = [1, 2, 3, 4, 5];
let result = arr.slice(2, 4);
console.log(result); // [3, 4];

// indexOf(): 특정 값을 가지는 원소의 첫째 인덱스 반환 O(N)
let arr10 = [7, 3, 5, 6, 7, 2, 1];
console.log(arr.indexOf(5)) // 2
console.log(arr.indexOf(6)) // 3
console.log(arr.indexOf(8)) // -1

