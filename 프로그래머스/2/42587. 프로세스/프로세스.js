function solution(priorities, location) {
  // 각 프로세스를 {priority, isTarget} 객체로 변환
  let queue = priorities.map((priority, index) => ({
    priority: priority,
    isTarget: index === location
  }));
  
  let printOrder = 0;
  
  while (queue.length) {
    // 큐의 맨 앞 프로세스를 꺼냄
    const current = queue.shift();
    
    // 남은 큐 중 현재 프로세스보다 우선순위가 높은 것이 있다면 다시 큐의 뒤에 넣음
    if (queue.some(item => item.priority > current.priority)) {
      queue.push(current);
    } else {
      // 프로세스를 실행 처리
      printOrder++;
      // 타겟 프로세스가 실행되면 실행 순서를 반환
      if (current.isTarget) {
        return printOrder;
      }
    }
  }
}