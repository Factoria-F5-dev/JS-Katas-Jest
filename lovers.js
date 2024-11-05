// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovers(flower1, flower2) {
//       let even = false
//       let odd = false
//       if (flower1 % 2 == 0) {
//             even = true
//       } else {
//             odd = true
//       }
//       if (flower2 % 2 == 0) {
//             even = true
//       } else {
//             odd = true
//       }
//       return even && odd;
// }

const lovers = (a,b) => a % 2 === 0 && b % 2 !== 0 || a % 2 !== 0 && b % 2 === 0;

module.exports = lovers;