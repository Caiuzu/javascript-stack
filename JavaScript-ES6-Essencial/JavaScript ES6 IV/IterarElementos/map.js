const arr = [1, 2, 3, 4, 5];

console.log(arr.map(value => value * 2));
// [2, 4, 6, 8, 10]


const frutas = ["melancia", "acerola", "laranja", "amora"];
const mapped = frutas.map((fruta, index) => index + " - " + fruta);

console.log(mapped);