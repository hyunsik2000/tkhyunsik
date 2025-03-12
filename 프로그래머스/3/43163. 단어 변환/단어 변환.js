function solution(begin, target, words) {
    var answer = words.length + 1;
    let visited = Array(words.length).fill(false);

    function checkEqual (a, b){
        let count = 0;
        
        for(let i = 0; i < a.length; i++){
            if(a[i] === b[i]){
                count++;
            }    
        }
        return count === a.length - 1 ? true : false;
    }
    
    function search(begin, target, visited, count){  
        if(words.length === 0){
            return 0;
        }
        if(begin === target){
            answer = count;
        }
        for(let i = 0; i < words.length; i++){
            let char = words[i];  
            
            if(visited[i]){
                continue;
            }
            
            if(checkEqual(char, begin)){
                visited[i] = true;
                search(char, target, visited, count + 1);
                visited[i] = false;
            }
        }
    }
    
    search(begin, target, visited, 0);
    
    return answer === words.length + 1 ? 0 : answer;
}