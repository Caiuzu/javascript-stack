const arr = [1, 2, [3, 4]];

console.log(arr.flat()); // [1, 2, 3, 4]

const idades = [20, 34, [35, 60, [70, 40]]];
console.log(idades.flat(2));