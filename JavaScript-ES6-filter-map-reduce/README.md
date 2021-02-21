# PLANO DE ESTUDOS - JAVASCRIPT ES6 MAP, FILTER E REDUCE

###### Por: [@Caiuzu](https://github.com/Caiuzu)

**#JavaScript #ES6 #MAP #FILTER #REDUCE**

[JAVASCRIPT - MAP, FILTER E REDUCE:]()
---

- [Filter:](./Code/filter.js) Cria um novo array com todos os elementos que passaram no teste da função fornecida.
    - `Array.prototype.filter()`
    - `var newArray = arr.filter(callback[, thisArg]).`
    - filter([:hamburger:, :fries:, :poultry_leg:, :popcorn: ]) => [:fries:, :popcorn:]

```JavaScript
  //Array básico
const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
];

const newPets = pets.filter((pet) => {
    return pet.age < 5
});

console.log(pets);
console.log(newPets);

```

- [Map:](./Code/map.js) Chama o callback para cada elemento e devolve um novo array com a mesma quantidade de items
    - `Array.prototype.map()`
    - `var newArray = arr.map(callback[, thisArg])`
    - map([:cow:, :sweet_potato:, :chicken:, :corn:]) => [:hamburger:, :fries:, :poultry_leg:, :popcorn:]

```JavaScript
  const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
];

const petNames = pets.map((pet) => {
    return pet.name // + ' ' + pet.age
})

console.log(pets);
console.log(petNames);

```

- [forEach:]() Não retorna um novo array com a mesma quantidade de elementos.

```JavaScript
const forEachPetNames = pets.forEach((pet) => {
    return forEachPetNames.push(pet.names)
});

console.log(forEachPetNames);
console.log(pets);
```

- [Reduce:]() Executa uma função para cada elemento retornando um único valor de retorno
    - `Array.prototype.reduce()`
    - `var newArray = arr.map(callback[, valorInicial])`
    - reduce([:hamburger:, :fries:, :poultry_leg:, :popcorn:]) => :poop:
    - Em alguns momentos, quando precisamos usar um map em conjunto com filter, podemos simplismente utilizar o reduce.
  

- [Map and Promise:]()
