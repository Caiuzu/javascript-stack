//caso o segundo parâmetro não tenha sido passado teremos um retorno de NaN (Not a Number)
//porém com quando definimos os parâmetros default como abaixo, caso não
function multiply(a = 1, b = 1) {
    return a * b
}

// function multiply(a, b) { // 0 é um valor falso, logo seria retornado o valor um em caso de uma multiplicação de zeros
//     b = b || 1
//     return a * b
// }

// function multiply(a = 1, b = 1) { // Assim funcionaria, porém é verboso demais
//     b = typeof b === 'undefined' ? 1 : b;
//     return a * b
// }


console.log(multiply(9 * 5));
console.log(multiply(5));
console.log(multiply(8, undefined));
console.log(multiply(3, 0));
console.log(multiply(undefined, 2));


//random number
//lazy evaluation
function randomNum() {
    console.log('Generating a random number...')
    return Math.random();
}

console.log(randomNum());

function multiplyRandom(a = randomNum(), b = randomNum()) {
    return a * b
}

console.log(multiplyRandom(2, 5));
console.log(multiplyRandom(2));
console.log(multiplyRandom(undefined, 6));