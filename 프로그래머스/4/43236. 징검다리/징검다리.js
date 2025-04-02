function solution(distance, rocks, n) {
    var answer = 0;    
    let right = distance;
    let left = 0;
    rocks.sort((a,b) => a-b).push(distance);
    
    while(left <= right) {
        let count = 0;
        let prev = 0;
        let mid = Math.floor((right + left) / 2);
        
        for(let i = 0; i < rocks.length; i++){
            if(rocks[i] - prev <= mid){
                count++;
            } else {
                prev = rocks[i];
            }
        }
        
        if(count > n){
            right = mid - 1;
        } else {
            left = mid + 1;
            answer = Math.max(answer, left);
            }
        }

    return answer;
}