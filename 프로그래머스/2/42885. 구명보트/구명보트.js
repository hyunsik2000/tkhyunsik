/*
10  30  40  50  60  70  80
1   2   3   4   5   6   7

(1,7) (2,6) (3,5) (4,4)

50 50 70 80
(1,7) (2,7)

30 40 50 60 70 80 

90, 30 70, 40 60,
1   
*/

function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => a-b);
    let first = 0;
    let last = people.length - 1;
    let count = people[first];
    
    while (first <= last) {
        count += people[last];
        if(count > limit){
            answer += 1;
            last--;
            count = people[first];
        }
        else {
            answer++;
            last--;
            first++;
            count = people[first];
        }
    }
    
    return answer;
}