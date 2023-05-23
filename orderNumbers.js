function orderNumber(numbers) {
    return numbers.sort((a,b) => {return a - b});

    //.sort(); // [1, 10, 2, 21]
    // Tenga en cuenta que 10 viene antes que 2
    // porque '10' viene antes que '2' según la posición del valor Unicode.
}

module.exports = orderNumber; 
  
