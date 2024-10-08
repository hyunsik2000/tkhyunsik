function solution(s, n) {
    let answer = '';

    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(char >= "A" && char <= "Z"){
            answer += String.fromCharCode((char.charCodeAt() - 65 + n) % 26 + 65);
        }
        else if(char >= "a" && char <= "z"){
            answer += String.fromCharCode((char.charCodeAt() - 97 + n) % 26 + 97);
        }
        else {
            answer += char;
        }
    }

    return answer;
}