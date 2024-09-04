function solution(players, callings) {
    // 선수의 이름을 키로 하고, 현재 위치를 값으로 가지는 해시맵 생성
    let positionMap = {};
    for (let i = 0; i < players.length; i++) {
        positionMap[players[i]] = i;
    }

    // callings 배열에 따라 선수들의 위치 변경
    for (let i = 0; i < callings.length; i++) {
        let calledPlayer = callings[i];
        let currentPosition = positionMap[calledPlayer];

        // 현재 위치에서 앞에 있는 선수와 위치를 교환
        if (currentPosition > 0) {
            let prevPlayer = players[currentPosition - 1];

            // players 배열에서 위치 교환
            players[currentPosition - 1] = calledPlayer;
            players[currentPosition] = prevPlayer;

            // 해시맵에서 위치 갱신
            positionMap[calledPlayer] -= 1;
            positionMap[prevPlayer] += 1;
        }
    }

    return players;
}