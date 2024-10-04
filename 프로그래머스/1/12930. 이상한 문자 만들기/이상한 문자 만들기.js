function solution(s) {
    var answer = '';
    let newS = s.split(' ');
    for (let i = 0; i < newS.length; i++){
        let newWord = '';
        for(let j = 0; j < newS[i].length; j++){
            if(j % 2 !== 0){
                newWord += newS[i][j].toLowerCase();
            }
            else {
                newWord += newS[i][j].toUpperCase();
            }
        }
        answer += newWord;
        if (i < newS.length - 1) {
            answer += ' ';
        }
    }
    return answer;
}