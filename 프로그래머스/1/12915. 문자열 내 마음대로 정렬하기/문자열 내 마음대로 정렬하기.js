function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }
    return a[n] < b[n] ? -1 : 1;
  });
}