// 트리

/*
  트리는 가계도와 같이 계층적인 구조를 표현할 때 사용할 수 있는 자료구조

  루트 노드(root node): 부모가 없는 최상위 노드
  단말 노드(leaf node): 자식이 없는 노드

  깊이(depth): 루트 노드에서의 길이(length)
  길이(length): 출발 노드에서 목적지 노드까지 거쳐야 하는 간선의 수
  높이(height): 로트 노드에서 가장 깊은 노드까지의 길이

  이진트리(Binary Tree): 최대 2개의 자식을 가질 수 있는 트리
  포화 이진 트리(Full Binary Tree): 리프 노드를 제외한 모든 노드가 두 자식을 가지고 있는 트리
  완전 이진 트리(Complete Binary Tree): 모든 노드가 왼쪽 자식부터 채워진 트리
  높이 균형 트리(Height Balanced Tree): 왼쪽 자식 트리와 오른쪽 자식 트리 높이가 1 이상 차이 나지 않는 트리
*/


// 우선순위 큐(Priority Queue)

/*
  우선순위 큐는 우선순위에 따라 데이터를 추출하는 자료구조
  일반적으로 힙(heap)을 이용해 구현
  이진트리(binary tree) 구조를 사용하는 것이 일반적
*/


// 힙(heap)

/*
  힙은 원소들 중에서 최댓값 혹은 최솟값을 빠르게 찾아내는 완전 이진 트리 자료구조
  우선순위가 높은 노드가 루트(root)에 위치
  힙은 원소의 삽입과 삭제를 위해 O(logN)의 수행 시간을 요구

  1. 최대 힙(max heap)
    - 부모 노드의 키 값이 자식 노드의 키 값보다 항상 큼
    - 루트 노드가 가장 크며, 값이 큰 데이터가 우선순위를 가짐
  2. 최소 힙(min heap)
    - 부모 노드의 키 값이 자식 노드의 키 값보다 항상 작음
    - 루트 노드가 가장 작으며, 값이 작은 데이터가 우선순위를 가짐

  최소 힙 구성 함수: Heapify
    - 부모로 거슬러 올라가며, 부모보다 자신이 더 작은 경우에 위치를 교체
*/


// JavaScript의 힙(Heap) 라이브러리

/*
  - https://github.com/ndb796/priorityqueuejs
  - index.js 소스 코드를 가져와서 사용
*/


// 최대힙(Max Heap)
const PriorityQueue = require("./tree_priority_queue");

let pq = new PriorityQueue(function(a, b) {
  return a.cash - b.cash;
});

pq.enq({ cash: 250, name: 'Doohyun Kim' });
pq.enq({ cash: 300, name: 'Gildong Hong' });
pq.enq({ cash: 150, name: 'Minchul Han' });
console.log(pq.size()); // 3
console.log(pq.deq()); // { cash: 300, name: 'Gildong Hong' }
console.log(pq.peek()); // { cash: 250, name: 'Doohyun Kim' }
console.log(pq.size()); // 2