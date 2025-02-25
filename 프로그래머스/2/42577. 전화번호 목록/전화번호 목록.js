function solution(phone_book) {
  // 사전순 정렬
  phone_book.sort();
  
  // 인접한 전화번호끼리 비교
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i+1].startsWith(phone_book[i])) {
      return false;
    }
  }
  
  return true;
}