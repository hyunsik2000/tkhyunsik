// function solution(n, left, right) {
//     let result = [];
//     const answer = Array.from(Array(n), () => new Array(n).fill(0))
//     answer[0][0] = 1;

//     for(let i = 1; i < n; i++){
//         for(let j = 0; j <= i; j++){
//             if(answer[i][j] === 0){
//                 answer[i][j] = i + 1;
//             }
//             if(answer[j][i] === 0) {
//                 answer[j][i] = i +1;
//             }
//         }
//     }

//     let newAnswer = answer.join(',').split(',').slice(left,right+1).map(Number);
    
//     return newAnswer;
// }

/* 
    1 2 3 4
    2 2 3 4 
    3 3 3 4
    4 4 4 4
*/

function solution(n, left, right) {
    let newArr = new Array(right - left + 1);
    let result = [];
    
    for(let i = 0; i < newArr.length; i++){
        let num = i + left;
        let row = Math.floor(num / n);
        let col = num % n;
        result[i] = (Math.max(row,col) + 1)
    }
    return result
}