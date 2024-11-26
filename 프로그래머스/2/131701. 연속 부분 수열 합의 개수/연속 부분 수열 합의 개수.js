function solution(elements) {
    const n = elements.length;
    const newList = [...elements, ...elements];
    var div = new Set();
    
    for (let i = 1; i <= n; i++){
        for (let j = 0; j < n;j++){
            var sum = 0;
            for (let k = 0; k < i; k++){
             sum += newList[j+k];   
            }
            div.add(sum);
        }
    }
    return div.size;
}