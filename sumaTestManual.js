const suma = (a,b) => a-b

// Si falla devuelve un mensaje de error
console.assert(
    suma(1,3) === 4, 
    'Suma 1 + 3 debe ser igual a 4'
)

console.assert(
    suma(2,3) === 5,
    'Suma 2 + 5 debe ser igual a 7'
)

// Refactorizando

const checks = [
    [1,3,4],
    [2,3,5],
    [3,3,6]
]
const check = (a,b,expected) => {
    const result = suma(a,b)
    console.assert(
        result === expected,
        `Suma ${a} + ${b} debe ser igual a ${expected}`
    )
}

checks.forEach(data => check(...data))



