function pangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

module.exports = pangram;

