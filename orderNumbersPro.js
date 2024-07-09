
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
          bubbleSort
};

