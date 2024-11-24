function solution(n) {
    const MOD = 1234567;
    if (n === 1) return 1;

    let prev1 = 1;
    let prev2 = 2;

    for (let i = 3; i <= n; i++) {
        const current = (prev1 + prev2) % MOD;
        prev1 = prev2;
        prev2 = current;
    }

    return prev2;
}