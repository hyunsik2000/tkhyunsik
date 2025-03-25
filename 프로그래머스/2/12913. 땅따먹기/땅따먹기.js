/*
1 234, 2 134, 3 124, 4 123 
[0][0] [1][1] [1][2] [1][3]
*/

function solution(land) {
    var answer = 0;
    let col = land.length;
    
    for(let i = 1; i < col; i++){
            land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
            land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
            land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
            land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
    }
    
    return Math.max(land[col-1][0], land[col-1][1], land[col-1][2], land[col-1][3]);
}