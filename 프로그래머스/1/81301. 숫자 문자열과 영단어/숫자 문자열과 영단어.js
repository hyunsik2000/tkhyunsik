function solution(s) {
    const numbers = {
        "zero" : "0",
        "one" : "1",
        "two" : "2",
        "three" : "3",
        "four" : "4",
        "five" : "5",
        "six" : "6",
        "seven" : "7",
        "eight" : "8",
        "nine" : "9"
    }
    
    for (const [num,digit] of Object.entries(numbers)){
        s = s.split(num).join(digit);
    }
    
    
    
    return Number(s);
}