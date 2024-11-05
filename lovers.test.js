const lovers = require('./lovers');

describe('lovers', function() {
      test('debería retornar true si uno de los números es par y el otro impar', () => {
            expect(lovers(2, 3)).toBe(true);
            expect(lovers(2, 2)).toBe(false);
      });
}
)