// Merge Sort
function mergeSort(arr) {
          if (arr.length <= 1) {
                    return arr;
          }

          // Encontrar el punto medio del array
          const mid = Math.floor(arr.length / 2);

          // Dividir el array en dos mitades
          const left = arr.slice(0, mid);
          const right = arr.slice(mid);

          // Ordenar recursivamente cada mitad
          return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
          let result = [];
          let leftIndex = 0;
          let rightIndex = 0;

          // Combinar los arrays ordenados
          while (leftIndex < left.length && rightIndex < right.length) {
                    if (left[leftIndex] < right[rightIndex]) {
                              result.push(left[leftIndex]);
                              leftIndex++; // Mover el índice hacia la derecha
                    } else {
                              result.push(right[rightIndex]);
                              rightIndex++; // Mover el índice hacia la derecha
                    }
          }

          // Concatenar los elementos restantes de los subarrays
          return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// Implementación de Bubble Sort
function bubbleSort(arr) {
          let n = arr.length;
          let swapped;
          do {
                    swapped = false;
                    for (let i = 0; i < n - 1; i++) {
                              if (arr[i] > arr[i + 1]) {
                                        // Intercambiar los elementos
                                        let temp = arr[i];
                                        arr[i] = arr[i + 1];
                                        arr[i + 1] = temp;
                                        swapped = true;
                              }
                    }
                    // Reducir n ya que el último elemento ya está ordenado
                    n--;
          } while (swapped);
          return arr;
}





// Implementación del algoritmo Quicksort

//El algoritmo Quicksort, que es un algoritmo eficiente de ordenamiento que utiliza el enfoque de divide y vencerás.Vamos a desglosar el código línea por línea:

function quickSort(arr) {
          if (arr.length <= 1) {
                    return arr;
          }
          let pivot = arr[Math.floor(arr.length / 2)];
          let left = arr.filter(x => x < pivot);
          let middle = arr.filter(x => x === pivot);
          let right = arr.filter(x => x > pivot);
          return [...quickSort(left), ...middle, ...quickSort(right)];
}

module.exports = {
          quickSort,
          bubbleSort,
          mergeSort
};

