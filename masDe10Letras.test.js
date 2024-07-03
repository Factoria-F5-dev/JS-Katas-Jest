const masDe10Letras = require('./masDe10Letras');

describe('contarLetras', () => {

          test('Devuelve true si es mayor de 10', () => {
                    const expected = true;
                    const result = masDe10Letras('JavaScript me gusta mucho mucho mucho');
                    expect(expected).toBe(result);
          });

          test('Devuelve false si es menor de 10', () => {
                    const expected = false;
                    const result = masDe10Letras('Java');
                    expect(expected).toBe(result);
          });

})