function solution(name, yearning, photo) {
    var answer = [];
    
    for (let i = 0; i < photo.length; i++) {
        let result = 0;
        for (let j = 0; j < photo[i].length; j++) {
            let personIndex = name.indexOf(photo[i][j]);
            if (personIndex !== -1) {
                result += yearning[personIndex];
            }
        }
        answer.push(result);
    }
    return answer;
}