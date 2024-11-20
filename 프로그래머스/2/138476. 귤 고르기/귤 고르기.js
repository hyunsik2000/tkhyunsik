function solution(k, tangerine) {
    var answer = 0;
    var box = {};
    
    for (let tang of tangerine){
        box[tang] = (box[tang] || 0) + 1;
    }
    
    const sortedBox = Object.values(box).sort((a,b) => b-a);
    
    for (let newTang of sortedBox){
        k -= newTang;
        answer++;
        if(k <= 0){
            break;
        }
    }
        
    return answer;
}