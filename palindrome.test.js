// Saca palindrome, desestructuración
const {palindrome} = require('./utils');

// Test parte de la API
// expect el callback
test('Palindrome', () => {
        const result =  palindrome('signados');
        expect(result ).toStrictEqual('sodangis');
}); 

test('Palindrome of undefined', () => {
    const result =  palindrome('');
    expect(result).toBeUndefined();
}); 
