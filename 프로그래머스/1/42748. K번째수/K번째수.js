function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        var newArray = [];
        if(commands[i][0] !== commands[i][1]){
            newArray = array.slice(commands[i][0] - 1, commands[i][1]);
            newArray.sort((a,b) => (a - b));
            answer.push(newArray[commands[i][2] - 1]);
        } else {answer.push(array[commands[i][0] - 1])} 


    }
    return answer;
}