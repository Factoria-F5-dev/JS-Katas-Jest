// Write a function that accepts a number, and checks it can be represented as a sum of exactly 3 powers of 2. (n == 2**i + 2**j + 2**k, i, j, k >= 0)
// https://www.codewars.com/kata/6545283611df271da7f8418c/train/javascript

function threePowers(n) {
          for (let x = 0; x < 56; x++) {
                    for (let y = 0; y < 56; y++) {
                              for (let z = 0; z < 56; z++) {
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
          for (let x = 0; x < 56; x++) {
                    for (let y = 0; y < 56; y++) {
                              for (let z = 0; z < 56; z++) {
                                        powerSet.add((2 ** x) + (2 ** y) + (2 ** z));
                              }
                    }
          }
          // Check if n is in the precomputed set
          return powerSet.has(parseInt(n));
          // parseInt return powerSet.has(parseInt(n));
}

function threePowersSuperOptimized(n) {
          // Convert n to a BigInt for handling large numbers
          n = BigInt(n);
          // Convert n to its binary string representation
          let binaryStr = n.toString(2);
          // Count the number of 1s in the binary representation
          let countOnes = 0;
          for (let char of binaryStr) {
                    if (char === '1') {
                              countOnes++;
                    }
          }
          // Check if the number of 1s is exactly 3
          return countOnes === 3;
}

// const threePowers = n => n > 2 && n.toString(2).split('').filter(x => +x).length < 4;
// const threePowers = n => n > 2n && n.toString(2).match(/1/g).length <= 3;

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