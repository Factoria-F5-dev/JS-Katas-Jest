const palindrome = string => {
    if(string.length == 0) { return undefined }
    return string.split('').reverse().join('') 
}

const average = array => {  
    // const reducer = (sum, item) => {
    //     return sum + item
    // }
    // return array.length === 0
    //     ? 0
    //     : a
    let sum = 0;
    array.forEach(value => {
        sum += value
    })
    return sum / array.length
}

module.exports = {
    palindrome,
    average
}

