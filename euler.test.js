const NUMBERS = [1,2,3,4,5,6,7,8,9];
const euler = require('./euler')
// Requiere es de node.js import es de ES6 de JavaScript navegador

describe('Euler problem', function() {
    // Entender bien lo que se pide
    // https://projecteuler.net/problem=1
        // If we list all the natural numbers below 10  that are multiples of 3 or 5 
        // we get  3,5,6,9
        // y la suma de estos valores es 23
        // Find the sum of all the multiples of 3 or 5 bellow
    // Pensar el algoritmo en lenguaje natural paso a paso con lógica
        // recibe un array de números
        // filtra los números que son múltiplos de 3 o 5
        // suma los números filtrados
        // devuelve la suma
    // Intentar codificar imperativamente
        // for (let i = 0; i < numbers.length; i++) {
        // if (numbers[i] % 3 === 0 || numbers[i] % 5 === 0) {
        //     sum += numbers[i];
    // Intentar codificar declarativamente
        // const sum = numbers.filter(n => n % 3 === 0 || n % 5 === 0).reduce((a, b) => a + b);   
    // y todo ello con TDD
    // y en varios lenguajes de programación, TypeScript
    test('Problema de euler', function() {
        let expected = 23;
        let result = euler(NUMBERS);
        expect(expected).toStrictEqual(result);
    });
});