function solution(keymap, targets) {
    var answer = [];
    for (let i = 0; i < targets.length;i++){   
        answer.push(0);
        for (let j = 0; j < targets[i].length; j++){
            let m = 0;
            let n = [];
            while (m !== keymap.length){
                if(keymap[m].includes(targets[i][j])){
                n.push(keymap[m].indexOf(targets[i][j]) + 1);
                }
                m++
            }
            if (n.length === 0){
                answer[i] = -1;
                break;
            }
            answer[i] += Math.min(...n);
        }
    }
    
    return answer;
}