//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const pangram = require('./pangram');

const STRING = 'AbCdEfGhIjKlM zYxWvUtSrQpOn'
describe('pangram', function() {
    test('Detectar si es un pangrama', function() {
        let expected = true;
        let result = pangram(STRING);
        expect(expected).toStrictEqual(result);
    });
});

/*
var string = "This is not a pangram."
    function isPangram(string){
        var alphabet = 'abcdefghijklmnopqrstuvwxyz'; // 26 letters
        var arrayAlphabet = alphabet.split('');
        count = 0;
        arrayAlphabet.forEach(x => {
            check = string.includes(x) ? 1 : 0
            count += check
        }); 
        if(count == 26) {
            return true;
        }else {
            return false;
        }
    }
isPangram(string);
*/
