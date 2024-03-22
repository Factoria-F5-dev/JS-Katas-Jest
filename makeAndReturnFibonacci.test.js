// Ahora podría refactorizar soportado por Test

const makeAndReturnFibonacci = require('./makeAndReturnFibonacci'); 

describe('makeAndReturnFibonacci', () => {
  test('debería retornar un array de Fibonacci con el límite especificado', () => {
    expect(makeAndReturnFibonacci(0)).toEqual([0, 1]);
    expect(makeAndReturnFibonacci(3)).toEqual([0, 1, 1, 2, 3]);
    expect(makeAndReturnFibonacci(4)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  test('debería retornar solo los dos primeros números para un límite de 0', () => {
    expect(makeAndReturnFibonacci(0)).toEqual([0, 1]);
  });
});