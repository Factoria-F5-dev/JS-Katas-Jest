const fizzbuzz =  require('./fizzbuzz');

fizzbuzz([3, 5, 30]); // [ 'fizz', 'buzz', 'fizzbuzz' ]

describe('fizzbuzz', () => {
      test('debería retornar un array con fizz, buzz o fizzbuzz dependiendo del número', () => {
      expect(fizzbuzz([3, 5, 30])).toEqual(['fizz', 'buzz', 'fizzbuzz']);
      });
})
