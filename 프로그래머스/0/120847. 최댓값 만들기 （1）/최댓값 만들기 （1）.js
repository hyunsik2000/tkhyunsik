function solution(numbers) {
    let newNumbers = numbers.sort((a,b) => a-b)
    
    return newNumbers[newNumbers.length-1] * newNumbers[newNumbers.length-2];
}