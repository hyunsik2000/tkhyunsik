function solution(phone_number) {
    const star = "*".repeat(phone_number.length - 4);
    const number = phone_number.slice(-4);
    return star + number
}