function solution(people, limit) {
    var answer = 0;
    var boatPeople = people.sort((a,b) => (a-b));
    var start = 0;
    var end = people.length - 1;
    
    while(start <= end){
        
        if(boatPeople[start] + boatPeople[end] <= limit) {
            start++;
        }
        
        end--;
        answer++;
    }
    
    return answer;
}