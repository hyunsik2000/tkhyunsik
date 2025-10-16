function solution(a, b) {
    let first = Number(String(a) + String(b))
    let second = 2 * a * b
    
    if(first > second) {
       return first
       } else if (first < second) {
        return second
        } else return first
}