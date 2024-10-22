function solution(n) {
    let count = 0; // 연속된 자연수로 n을 표현할 수 있는 경우의 수
    
    // 연속된 숫자의 개수 k를 1부터 점진적으로 증가시키며 경우의 수를 찾음
    for (let k = 1; k * (k - 1) / 2 < n; k++) {
        // x는 첫 번째 숫자
        if ((n - (k * (k - 1)) / 2) % k === 0) {
            count++;
        }
    }
    
    return count;
}
