function solution(cacheSize, cities) {
  // 캐시 크기가 0인 경우, 모든 요청이 캐시 미스
  if (cacheSize === 0) return cities.length * 5;
  
  let cache = [];
  let time = 0;
  
  for (let city of cities) {
    // 대소문자 구분 없이 비교하기 위해 소문자로 변환
    let lowerCity = city.toLowerCase();
    let index = cache.indexOf(lowerCity);
    
    // 캐시 히트: 해당 도시가 이미 캐시에 있다면
    if (index !== -1) {
      // 기존 위치의 요소를 제거한 후 가장 뒤로 이동(최근 사용)
      cache.splice(index, 1);
      cache.push(lowerCity);
      time += 1;
    } else {
      // 캐시 미스: 캐시에 없으면, 꽉 찼을 경우 가장 오래된 항목 제거
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(lowerCity);
      time += 5;
    }
  }
  
  return time;
}
