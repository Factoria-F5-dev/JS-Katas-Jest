function filterSheeps(sheeps) {

    // De forma declarativa
    // let despiertas = sheeps.filter(sheep => sheep);
    // let dormidas = sheeps.filter(sheep => !sheep);
    // return `Hay ${despiertas.length} ovejas dormidas y ${dormidas.length} ovejas despiertas`;

    // De forma imperativa
    // let despiertas = 0;
    // let dormidas = 0;
    // Más imperativo definiendo el for (variable de control, condición, incremento)
    // sheeps.forEach(sheep => {
    //     if(sheep) {
    //         despiertas++;
    //     } else {
    //         dormidas++;
    //     }
    // });
    // return `Hay ${despiertas} ovejas dormidas y ${dormidas} ovejas despiertas`;

    // Con reduce: .reduce. El método reduce() aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.

    // let despiertas = sheeps.reduce((acc, sheep) => sheep ? acc + 1 : acc, 0);
    // let dormidas = sheeps.reduce((acc, sheep) => !sheep ? acc + 1 : acc, 0);
    // return `Hay ${despiertas} ovejas dormidas y ${dormidas} ovejas despiertas`;

    // De forma concisa
    return `Hay ${sheeps.filter(sheep => sheep).length} ovejas dormidas y ${sheeps.filter(sheep => !sheep).length} ovejas despiertas`;
}

module.exports = filterSheeps;


//Optimización de un for. Lo declarativo sule ser más eficiente, estos lenguajes tienen otros lenguajes por debajo


// let myArray = {
//     unArray: new Array(1000000)
// }
// console.time('Opción 1')
// for (let i = 0; i < myArray.unArray.length; i++) {}
// console.timeEnd('Opción 1')


// let myArray2 = {
//     unArray: new Array(1000000)
// }
// let longitud = myArray.unArray.length
// console.time('Opción 2')
// for (i = 0; i < longitud; i++) {}
// console.timeEnd('Opción 2')






//for 2: 1461.806640625ms

// ¿Con filter?

// */