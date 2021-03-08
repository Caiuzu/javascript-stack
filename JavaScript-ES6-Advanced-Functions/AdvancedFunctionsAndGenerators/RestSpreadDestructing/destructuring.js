//destructuring em arrays
var fruits = [{name: 'apple', type: 'fruit'}, 'banana', 'pineapple', ['avocado']];

var [{name: apple}, banana, pineapple, [avocado]] = fruits

console.log(apple);
console.log(banana);
console.log(pineapple);
console.log(avocado);

//destructuring em objetos
const obj = {
    name: 'Fulano',
    lastname: 'Beltrano',
    props: {
        age: 30
    },
    favcolors: ['orange', 'purple']
}

let {
    name,
    lastname: lname,
    props: {age},
    favcolors: [favcolor1, favcolor2]
} = obj;

console.log(name);
console.log(lname);
console.log(age);
console.log(favcolor1);
console.log(favcolor2);

//destructuring em funções
function sum([a, b]) {
    return a + b
}

console.log(sum([5, 6]));
