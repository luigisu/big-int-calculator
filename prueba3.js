const multiplicacion = (multiplicando, multiplicador) => {
    let result = 0
    for (let index = 0; index < multiplicador; index++) {
        result += multiplicando
    }
    return result
}

const potencia = (base, exponente) => {
    let result= 1
    for (let index = 0; index < exponente; index++) {
        result = multiplicacion(result, base)
    }
    return result
}
console.log(potencia(5, 2))
// SALIDA: 25
console.log(potencia(3, 3))
// SALIDA: 27
