const filterRedOvejas = require('./filterRedOvejas');

describe('filterRedOvejas', () => {
    const ovejas = [
        { name: 'Noa', color: 'azul' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'green' },
        { name: 'Ki Na Ma', color: 'rojo'},
        { name: 'AAAAAaaaaa', color: 'blue' },
        { name: 'Nnnnnnnn', color: 'blue'}
    ]
    test('return array de ovejas rojas', () => {
        const expected = [{ name: 'Euge', color: 'rojo' }, { name: 'Ki Na Ma', color: 'rojo' }];
        const result = filterRedOvejas(ovejas);
        expect(expected).toStrictEqual(result);
    }); 
})