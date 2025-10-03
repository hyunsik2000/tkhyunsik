function solution(n, k) {
    let result = 0;
    result += n * 12000;
    k -= Math.floor((n / 10));
    result += k * 2000
    return result;
}