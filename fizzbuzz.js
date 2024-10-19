// Any number divisible by three is replaced by the word fizz and any number divisible by five by the word buzz.Numbers divisible by both three and five(i.e.divisible by fifteen) become fizz buzz.

// function fizzbuzz(a) {
//       const res = []
//       for (let x = 0; x < a.length; x++)
//             if (a[x] % 5 == 0 && a[x] % 3 == 0) {
//                   res.push('fizz')
//             } else if (a[x] % 5 == 0) {
//                   res.push('buzz')
//             } else if (a[x] % 3 == 0) {
//                   res.push('fizzbuzz')
//             } else (
//                   res.push(a[x])
//             )
//       return res;
// }

const fizzbuzz = (a) => { return a.map(x => 
      (x % 3 === 0 && x % 5 === 0) ? 'fizzbuzz' :  x % 5 == 0 ? 'buzz':  x % 3 == 0 ? 'fizz' : x) 
}  // using map function

module.exports = fizzbuzz;