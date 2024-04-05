const SHEEPS = [true, false, true, true, true, false, true, true];
const filterSheeps = require('./filterSheeps')
// Requiere es de node.js import es de ES6 de JavaScript navegador

describe('filterSheeps', function() {
    // Documentación de la aplicación
    // Oportunidad para definir qué quieres hacer
    // Oportunidad para validar que el código hace lo que quieres
    // REFACTORIZAR
    test('Contar ovejas dormidas (true) y cuantas despiertas (false)', function() {
        let expected = 'Hay 6 ovejas dormidas y 2 ovejas despiertas';
        let result = filterSheeps(SHEEPS);
        expect(expected).toStrictEqual(result);
    });
});