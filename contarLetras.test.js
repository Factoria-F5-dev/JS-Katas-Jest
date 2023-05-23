const contarLetras = require('./contarLetras');

describe('contarLetras', () => {

    test('Devuelve true si es mayor de 10', () => {
        const expected = true;
        const result = contarLetras('JavaScript me gusta mucho mucho mucho');
        expect(expected).toBe(result);
    });

    test('Devuelve false si es menor de 10', () => {
        const expected = false;
        const result = contarLetras('Java');
        expect(expected).toBe(result);
    }); 

})