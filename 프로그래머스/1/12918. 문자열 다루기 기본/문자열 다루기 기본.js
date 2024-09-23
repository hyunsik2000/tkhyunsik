function solution(s) {
    // 문자열의 길이가 4 또는 6이고, 숫자로만 구성되어 있는지 확인
    return (s.length === 4 || s.length === 6) && /^\d+$/.test(s);
}