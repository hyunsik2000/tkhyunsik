function solution(s) {
    let count = 0;

    for (let char of s) {
        if (char === '(') {
            count++;  // '('가 나오면 카운트를 증가시킴
        } else {
            count--;  // ')'가 나오면 카운트를 감소시킴
        }

        // 닫는 괄호가 더 많아지면 짝이 맞지 않음
        if (count < 0) {
            return false;
        }
    }

    // 마지막에 카운트가 0이어야 올바른 괄호임
    return count === 0;
}