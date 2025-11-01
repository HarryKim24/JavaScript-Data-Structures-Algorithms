// 스택

/*
  스택: 먼저 들어온 데이터가 나중에 나가는 자료구조
  삽입(Push) - 스택에 원소를 삽입
  추출(Pop) - 스택에서 원소를 추출
  최상위 원소(Top) - 스택의 최상위 원소를 확인(마직막에 들어온 원소)
  Empty - 스택이 비어있는지 확인
*/

// JavaScript의 스택

/*
  push() 메서드: 마지막 위치에 원소를 삽입, 시간 복잡도 O(1)
  pop() 메서드: 마지막 위치에서 원소를 추출, 시간 복잡도 O(1)
*/

// 배열 자료형
let stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();

let reserved = stack.slice().reverse();
console.log(reserved); // 최상단 원소부터 출력
console.log(stack);

// 연결 리스트로 스택 구현

/*
  스택을 연결 리스트로 구현하면, 삽입과 삭제에 있어서 O(1)을 보장
  연결 리스트로 구현할 때는 머리(head)를 가리키는 하나의 포인터만 가짐
  머리(head): 남아있는 원소 중 가장 마지막에 들어온 데이터를 가리키는 포인터
*/