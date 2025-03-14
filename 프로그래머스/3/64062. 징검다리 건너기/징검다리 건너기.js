function solution(stones, k) {
    let left = 1;
    let right = 200000000;
    
    while(left <= right){
        let mid = Math.round((left + right) / 2);
        let count = 0;
        let valid = false;
        
        for (const num of stones){
            if(num - mid <= 0){
                count++;
            } else count = 0;

            if(count >= k){
                valid = true;
                break;
            }
        }
        
        valid ? right = mid - 1 : left = mid + 1;
        
    }
    
    return left;
}