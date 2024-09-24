function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
    const greatestCommonDivisor = gcd(n, m);
    const leastCommonMultiple = lcm(n, m);
    return [greatestCommonDivisor, leastCommonMultiple];
}