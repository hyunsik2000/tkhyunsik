function solution(k, dungeons) {
    let maxCount = 0;

    function dfs(piro, count, visited) {
        
        maxCount = Math.max(maxCount, count);
        
        for(let i = 0; i < dungeons.length; i++){
            if(!visited[i] && piro >= dungeons[i][0]){
                visited[i] = true;
                dfs(piro - dungeons[i][1], count + 1, visited);
                visited[i] = false;
            }
        }
    }
                    
    dfs(k, 0, Array(dungeons.length).fill(false));
    
    return maxCount;
}