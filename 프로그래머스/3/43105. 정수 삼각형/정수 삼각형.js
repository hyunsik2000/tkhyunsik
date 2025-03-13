function solution(triangle) {
    var answer = 0;
    
    const dp = triangle.map(row => Array(row.length).fill(0));
    
    console.log(dp);
    
    dp[0][0] = triangle[0][0];
    
    for (let i = 1; i < triangle.length; i++){
        for(let j = 0; j < i + 1; j++){
            if(j === 0){
                dp[i][j] = dp[i-1][0] + triangle[i][0];
            }
            else if(j === i){
                dp[i][j] = dp[i-1][j-1] + triangle[i][j];
            }
            else {
                dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j];    
            }
        }
    }
    
    return Math.max(...dp[triangle.length - 1]);
}