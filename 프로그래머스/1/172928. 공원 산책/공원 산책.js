function solution(park, routes) {
    const width = park[0].length;
    const height = park.length;
    const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
    };
    
    let startPoint;
    for(let i = 0; i < height; i++){
        for(let  j = 0; j < width; j++){
            if(park[i][j] === "S") {
                startPoint = [i,j];
                break;
            }
        }
    }   
    
    for (const route of routes){
        const [dir, dirDistance] = route.split(" ");
        let distance = parseInt(dirDistance);
        let [newX, newY] = startPoint;
        
        let step = 0; 
        while(step < distance){
            newX += directions[dir][0];
            newY += directions[dir][1];
            if(newX < 0 || newX >= height || newY < 0 || newY >= width || park[newX][newY] === "X") break;     
            step++;
        }
        if(step === distance){
            startPoint = [newX,newY];
        }
    }
    return startPoint;
}
