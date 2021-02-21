const array = [1, 2, 3, 4, 5];

array.splice(2);        // apartir da poisção 2 vai remover os itens [3, 4, 5]
console.log(array);          // novo valor de array [1, 2]

array.splice(0, 0, 'first');    // apartir da posição 0 remova (menos da própria posição) , quantos itens serão removidos 0, e o que será adicionado 'first' []
console.log(array);                                  // ["first", 1, 2]


let frutas = ["melancia", "banana"];

frutas.splice(1, 0, "acerola");
console.log(frutas);

frutas.splice(2, 1, "acerola", "laranja");
console.log(frutas);