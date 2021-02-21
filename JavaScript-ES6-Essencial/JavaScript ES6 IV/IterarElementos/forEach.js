const arr = [1, 2, 3, 4, 5];

arr.forEach((value) => console.log(value));

arr.forEach((value, index) => { // para saber o indice além do item
    console.log(`${index}: ${value}`);
});

arr.forEach((value, index, arr) => { // para saber o indice e o array, além do item
    console.log(index, value, arr);
});

/**/

const frutas = ["melancia", "acerola", "laranja", "amora"];

frutas.forEach((value) => console.log(value));

frutas.forEach((value, index) => { // para saber o indice além do item
    console.log(index, value);
});

frutas.forEach((value, index, arr) => { // para saber o indice e o array, além do item
    console.log(index, value, arr);
});

