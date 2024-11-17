function solution(n, words) {
    var answer = [words[0]];
    
    for(let i = 1; i < words.length; i++){
        let char1 = words[i-1];
        let char2 = words[i];
        if(char1[char1.length - 1] !== char2[0]){
            return [(i % n) + 1, Math.floor(i/n) + 1];
        }
        if(!answer.includes(char2)){
        answer.push(char2);
        } else {return [(i % n) + 1, Math.floor(i/n) + 1];}
        }

    return [0,0];
}