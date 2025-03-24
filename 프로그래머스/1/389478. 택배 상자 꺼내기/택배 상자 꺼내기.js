function solution(n, w, num) {
    let count = 1; // 자신 포함
    const targetFloor = Math.floor((num - 1) / w); // 층 계산
    const isEvenFloor = targetFloor % 2 === 0; // 짝수층인지 홀수층인지
    const pos = (num - 1) % w; // 현재 층에서 위치 (0부터 왼쪽에서부터)

    let currentFloor = targetFloor + 1; // 바로 윗층부터 시작
    let currentNum;

    while (true) {
        // 현재 층이 짝수인지 홀수인지 계산
        const evenFloor = currentFloor % 2 === 0;

        // 위층의 같은 열의 번호 계산
        if (evenFloor === isEvenFloor) {
            currentNum = currentFloor * w + pos + 1;
        } else {
            currentNum = currentFloor * w + (w - pos);
        }

        if (currentNum > n) break;

        count++;
        currentFloor++;
    }

    return count;
}
