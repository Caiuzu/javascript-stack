let x = parseInt(gets());
let z = 0;
let cont = 0;
let soma = 0;

while (x >= z) {
    z = parseInt(gets());
}

while (soma <= z) {
    soma += x;
    x++;
    cont++;
}
console.log(cont);

// erro no 3º teste
// let x = parseInt(gets());
// let z = 0;
// let cont = 0;
//
// while (x >= z) {
//     z = parseInt(gets());
// }
//
// for (let a = x, soma = 0; soma < z; a++) {
//     soma += a;
//     cont++;
// }
// console.log(cont);
