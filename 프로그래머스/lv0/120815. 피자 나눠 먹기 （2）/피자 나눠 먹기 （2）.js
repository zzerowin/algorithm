const solution = (n) => {
    let pizzaNum = 6;
    
    while (pizzaNum % n !== 0) {
        pizzaNum += 6;
    }
    
    return pizzaNum / 6;
}