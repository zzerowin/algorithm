function solution(array) {
    const midNumber = Math.floor(array.length / 2);
    const ascArr = array.sort((a, b) => a - b);
    
    return ascArr[midNumber];
}