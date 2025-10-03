function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++){
        let newchar = i.toString();
        let isFive = false;
        for(let i = 0; i < newchar.length; i++){
            if(newchar[i] === "0" || newchar[i] === "5"){
                isFive = true;
            } else {
                isFive = false;
                break;
            }
        }
        if(isFive){
            console.log(i);
            answer.push(i);
        }
    }
    return answer.length === 0 ? [-1] : answer;
}