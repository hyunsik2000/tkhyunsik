function solution(genres, plays) {
    var answer = [];
    let music = {};
    
    for(let i = 0; i < genres.length; i++){
        if (music[genres[i]] === undefined){
            music[genres[i]] = plays[i]
        }
        else {
            music[genres[i]] += plays[i]
        }
    }
    
    let newMusic = Object.entries(music);
    newMusic.sort((a,b) => b[1] - a[1]);
    
    let newList = genres.map((g, i) => ({
        genre : g,
        index : i,
        count : plays[i]
    }))
    
    newMusic.forEach((k,i) => {
        let current = [];
        for(let j = 0; j < newList.length; j++){
            if(k[0] === newList[j].genre){
                current.push(newList[j]);
            }
        }
        current.sort((a,b) => b.count - a.count);
        current.forEach((c,i) => {
            if(i < 2){
                answer.push(c.index);
            }
        })
    })
    return answer;
}