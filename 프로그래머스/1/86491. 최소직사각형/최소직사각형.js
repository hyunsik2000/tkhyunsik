function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (let i = 0; i < sizes.length; i++) {
        let [w, h] = sizes[i][0] > sizes[i][1] ? [sizes[i][0], sizes[i][1]] : [sizes[i][1], sizes[i][0]];
        maxWidth = Math.max(maxWidth, w);
        maxHeight = Math.max(maxHeight, h);
    }
    return maxWidth * maxHeight;
}
