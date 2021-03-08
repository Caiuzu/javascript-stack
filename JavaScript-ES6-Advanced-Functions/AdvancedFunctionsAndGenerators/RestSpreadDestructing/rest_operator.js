//(...args) recebe os argumentos e retorna um array
//arguments recebe os argumentos e retorna um objeto
function rest(...args) {
    console.log(`rest operator: ${args}`);
}

rest(1, 2, 3, 4, 5, 6);

const arguments = () => {
    console.log(`arguments: ${arguments}`);
}
arguments(1, 2, 3, 4, 5, 6);


// const sum = (a, b, ...rest) => {// pega os primeiros itens e repassa o resto em ...rest para baixo
//     console.log(a, b, rest);
// }

//iterar os argumentos com rest operator
function sum(...args) {
    console.log(args.reduce((total, value) => total + value, 0));
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
sum(777, 888);

const multiply = (...args) => args.reduce((total, value) => total * value, 1);
console.log(multiply(2, 3));
console.log(multiply(2, 2, 2));
console.log(multiply(2, 5, 10));
