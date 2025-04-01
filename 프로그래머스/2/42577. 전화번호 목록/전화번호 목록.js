function solution(phone_book) {
    const new_book = phone_book.sort();
    for(let i = 0; i < new_book.length - 1; i++){
        if(new_book[i+1].startsWith(new_book[i])){
            return false;
        }
    }
    return true;
}