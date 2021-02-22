let qnt = parseInt(gets());
let array = gets();
let regex = array.replace(/\s/g, ',').trim().split(',');
// .trim() - Remove espaços em brancos
// \s - "match whitespace"


let menorValor = regex[0];
let posicao = 0;

for (let i = 1; i < qnt; i++) {
    if (parseFloat(menorValor) > parseFloat(regex[i])) {
        menorValor = regex[i];
        posicao = i;
    }
}

console.log("Menor valor:", menorValor, "\nPosicao:", posicao );


// let qnt = parseInt(gets());
// const array = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];  //let array = gets();
// let menor = Math.min.apply(Math, array);
// console.log("Menor valor:", menor, "\nPosicao:",  array.indexOf(menor));

// let regex = array.replace(/\s/g, ',').trim().split(',');
// let arrayOK = array;
// let arrayR = arrayOK.sort();
//
// const firstFindItem = arrayOK.find(value => value < array[value] );
// const findIndexItem = arrayOK.findIndex(value =>[value]);
//
// console.log("Menor valor:", firstFindItem, "\nPosicao:", findIndexItem);
// console.log(array);
