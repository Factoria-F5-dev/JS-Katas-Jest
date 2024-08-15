// Write a function that accepts a number, and checks it can be represented as a sum of exactly 3 powers of 2. (n == 2**i + 2**j + 2**k, i, j, k >= 0)
// https://www.codewars.com/kata/6545283611df271da7f8418c/train/javascript

function threePowers(n) {
          for (let x = 0; x < 256; x++) {
                    for (let y = 0; y < 256; y++) {
                              for (let z = 0; z < 256; z++) {
                                        if (n == 2 ** x + 2 ** y + 2 ** z) {
                                                  return true;
                                        }
                              }
                    }
          }
          return false;
}

function threePowersOptimized(n) {
          const powerSet = new Set();
          // Precompute all possible sums of 2^x + 2^y + 2^z
          for (let x = 0; x < 256; x++) {
                    for (let y = 0; y < 256; y++) {
                              for (let z = 0; z < 256; z++) {
                                        powerSet.add((2 ** x) + (2 ** y) + (2 ** z));

                                        const threePowersSuperOptimized = n => n > 2 && n.toString(2).split('').filter(x => +x).length < 4;

                                        // const threePowers = n => n > 2 && n.toString(2).split('').filter(x => +x).length < 4;
                                        // - Mayor que dos  y && and sino se cumple devuelve falser
                                        // - n.toString(2), da codificación en binario: 5 = 101
                                        // - split: divide la cadena de texto binaria en un array de caracteres individuales.
                                        // - .filter(x => +x): Filtra los elementos del array, manteniendo solo aquellos que son '1'. El operador + /convierte cada carácter de cadena a un número, y cualquier carácter que no sea '0' se evalúa como true.
                                        // - .length < 4: Verifica si la longitud del array filtrado(es decir, el número de bits con valor 1) es menor que 4
                                        // Dividimos el número por 2 y anotamos el residuo. / Tomamos el cociente y lo volvemos a dividir por 2, anotando el nuevo residuo. / Repetimos el proceso hasta que el cociente sea 0. / Leemos los residuos de abajo hacia arriba.Esto nos da la representación binaria del número.
                                        // Ejemplo: Convertir 14 a binario 14 ÷ 2 = 7 residuo 0 / 7 ÷ 2 = 3 residuo 1 / 3 ÷ 2 = 1 residuo 1 / 1 ÷ 2 = 0 residuo 1 : 

                                        // const threePowers = n => n > 2
                              }
                    }
          }
          // Check if n is in the precomputed set
          return powerSet.has(parseInt(n));
          // parseInt return powerSet.has(parseInt(n));
} // n && n.toString(2).match(/1/g).length <= 3;
// Calcula que si 16 es 1000 deduce que se puede 



// Variable de configuración para seleccionar la implementación
let useOptimized = 1;

function threePowersWrapper(n) {
          switch (useOptimized) {
                    case 1:
                              return threePowers(n);
                    case 2:
                              return threePowersOptimized(n);
                    case 3:
                              return threePowersSuperOptimized(n);
          }
}

function setUseOptimized(value) {
          useOptimized = value;
}

module.exports = { threePowers, threePowersOptimized, threePowersWrapper, setUseOptimized };