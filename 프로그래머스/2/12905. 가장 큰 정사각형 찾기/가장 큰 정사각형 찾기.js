/*
    0 1 1 1
    1 1 1 1
    1 1 1 1
    0 0 1 0

그렇다면 각 1 2 3 4 에서 연속으로 1이 나오는 부분을 일단 찾기 -> 0 이 나오면?
그럼 일단 max 값을 설정해서 저장 해야하나? 
만약에 각 배열의 0번째가 1이 쭈루룩 나왔어 1단계 조건 완수 -> 2단계 각 배열의 그 길이 값 만큼 연속된 수가 1인가?
--> 이게 뭔가 접근이 쉽고 정확한듯

--> DP를 통해서 연결되어 있는 길이중 가장 큰 값을 구하는 것이기 때문에 결국에는 이 방법을 몰랐으면 노가다 였을듯 하다
*/

function solution(board)
{
    let max = 0;
    
    if(board.length === 1 || board[0].length === 0) return 1;

    for(let i = 1; i < board.length; i++) {
        for(let j = 1; j < board[i].length; j++) {
            if(board[i][j] !== 0){
                board[i][j] = Math.min(board[i-1][j-1], board[i][j-1], board[i-1][j]) + 1;
                max = Math.max(max, board[i][j])
            }
        }
    }
    
    return max * max;
}