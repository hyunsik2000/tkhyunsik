function solution(n, edge) {
    return bfs(1, edge, n);
}

function bfs(start, edge, end) {
    let queue = [start];
    let visited = Array(end + 1).fill(false);
    let level = Array(end + 1).fill(0);
    
    visited[start] = true;
    
    while(queue.length){
        let head = queue.shift();
        
        let lev = level[head] + 1;
        
        for(let node of edge){
            if(node[0] === head && !visited[node[1]]){
                queue.push(node[1]);
                level[node[1]] = lev;
                visited[node[1]] = true;
            } else if (node[1] === head && !visited[node[0]]){
                queue.push(node[0]);
                level[node[0]] = lev;
                visited[node[0]] = true;
            } 
        }
    }
    const maxLevel = Math.max.apply(null, level);
    
    return level.filter((i) => i === maxLevel).length;
}