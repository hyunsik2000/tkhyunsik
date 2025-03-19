// [3 5] [5, 15] [13 18] [15 20]

function solution(routes) {
    var answer = 1;
    routes.sort((a,b) => b[0]-a[0]);
    console.log(routes);
    let start = routes[0][0];
    let end = routes[0][1];
    for(let i = 1; i < routes.length; i++){
        let curStart = routes[i][0];
        let curEnd = routes[i][1];
    
        if(start > curEnd){
            start = curStart;
            end = curEnd;
            answer++;
        }
        else {
            end = curEnd;
        }
        
        
    }
    return answer;
}