function euler(numbers) {
    return numbers.filter(n => n % 3 === 0 || n % 5 === 0).reduce((a, b) => a + b);
}

module.exports = euler;