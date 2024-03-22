function makeAndReturnFibonacci(limit) {
    let fibonacci = [0,1];
    for (let i = 0; i < limit; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
    }
    return fibonacci;
}

module.exports = makeAndReturnFibonacci;