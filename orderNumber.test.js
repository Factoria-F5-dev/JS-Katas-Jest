const orderNumbers = require('./orderNumbers');

describe('orderNumbers', () => {
    const numbers = [30,21,10000,1,4]
    test('Ordenar array de números', () => {
        const expected = [1,4,21,30,10000];
        //const expected = [1,10000,21,30,4];
        const result =  orderNumbers(numbers);
        // Problema con toBe al comparar string
        expect(expected).toStrictEqual(result);
    }); 

})