function solution(sides) {
    let newSides = sides.sort((a,b) => a-b)
    return newSides[2] < newSides[1] + newSides[0] ? 1 : 2;
}