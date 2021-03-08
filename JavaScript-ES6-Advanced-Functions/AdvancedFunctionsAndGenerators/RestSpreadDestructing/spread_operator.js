//transforma os parâmetros passados em parâmetros para outra função
const multiply = (...rest) => rest.reduce((total, value) => total * value, 1);
const values = (...spread) => multiply(...spread);

console.log(values(2, 5, 10));
console.log(values(8, 8));
console.log(values(345, 796));

//pode ser usado em strings, arrays, literal objects e objetos iteráveis
const str = 'Fulano';
const arr = [1, 2, 3, 4, 5, 6];

function logargs(...args) {
    console.log(args);
}

logargs(...str);

function argsx2(...args) {
    console.log(args.map((values) => values * 2));
}

argsx2(...arr);

//construir arrays
const arr2 = [1, 2, 3, 4, 5, 6];

const arr3 = [...arr2, 7, 8, 9, 10];
const arr4 = [...arr2, ...arr3];
const arr4clone = [...arr4]

console.log(arr4);
console.log(`array clone: ${arr4clone}`)

//utilizar em objeos literais para construir novos objetos
const firstname = {
    name: 'Fulano'
}
const lastnameage = {
    lastname: 'Beltrano',
    age: 35
}
const person = {
    ...firstname,
    ...lastnameage
}
person.age = 18;

console.log(lastnameage);
console.log(person);