function solution(clothes) {
    var answer = 0;
    let newClothes = new Map();
    
    for(let i = 0; i < clothes.length; i++){
        let kind = clothes[i][1];
        if(!newClothes.has(kind)){
            newClothes.set(kind,1);
            answer++;
        }
        else {
            let num = newClothes.get(kind);
            newClothes.set(kind, num+1);
        }
    }
    
    console.log(newClothes.size)
    
    let combinations = 1;
    for (let count of newClothes.values()) {
        combinations *= (count + 1);
    }

    
    return newClothes.size === 1 ? clothes.length : combinations - 1;
}