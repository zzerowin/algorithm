const solution = (money) => {
    const coffee = 5500;
    
    const glass = Math.floor(money / coffee); // 1
    const change = money % coffee;
    
    const answer = [glass, change];
    
    return answer;
}