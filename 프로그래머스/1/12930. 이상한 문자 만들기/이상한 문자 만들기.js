function solution(s) {
    var answer = '';
    let newS = s.split(' ');
    for (let i = 0; i < newS.length; i++){
        let newWord = '';
        for (let j = 0; j < newS[i].length; j++) {
            newWord += (j % 2 !== 0) ? newS[i][j].toLowerCase() : newS[i][j].toUpperCase();
        }
        answer += newWord;
        if (i < newS.length - 1) {
            answer += ' ';
        }
    }
    return answer;
}