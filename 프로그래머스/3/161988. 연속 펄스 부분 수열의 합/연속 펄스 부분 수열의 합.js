function solution(sequence) {
    let pulse1 = Array(sequence.length).fill(0);
    let pulse2 = Array(sequence.length).fill(0);

    // 펄스 수열 적용
    for (let i = 0; i < sequence.length; i++) {
        if (i % 2 === 0) {
            pulse1[i] = sequence[i] * -1; // 첫 번째 패턴 (-1, 1, -1, ...)
            pulse2[i] = sequence[i] * 1;  // 두 번째 패턴 (1, -1, 1, ...)
        } else {
            pulse1[i] = sequence[i] * 1;
            pulse2[i] = sequence[i] * -1;
        }
    }

    // 카데인 알고리즘을 사용하여 최대 부분합을 구하는 함수
    const kadane = (arr) => {
        let maxSum = arr[0]; 
        let currentSum = arr[0];

        for (let i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    };

    // 두 패턴 중 최댓값을 선택
    return Math.max(kadane(pulse1), kadane(pulse2));
}
