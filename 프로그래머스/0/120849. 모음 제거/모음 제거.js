function solution(my_string) {
    let answer = ""
    let newString = my_string.split('')
    for(let i = 0; i < newString.length; i++){
        if(newString[i] !== "a" && newString[i] !== "e" && 
           newString[i] !== "i" && newString[i] !== "o" && 
           newString[i] !== "u") {
            answer += newString[i]
        }
    }
  
    return answer;
}