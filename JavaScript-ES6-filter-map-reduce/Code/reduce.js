const pets = [
    {
        name: "snoop",
        type: "dog",
        age: 9,
        weight: 15.0
    },
    {
        name: "naja",
        type: "dog",
        age: 1,
        weight: 1.0
    },
    {
        name: "miau",
        type: "cat",
        age: 5,
        weight: 3.0
    },
    {
        name: "gulp",
        type: "fish",
        age: 1,
        weight: 0.01
    },
    {
        name: "pé de pano",
        type: "horse",
        age: 22,
        weight: 200.0
    },
    {
        name: "mayko",
        type: "donkey",
        age: 7,
        weight: 15.0
    },
    {
        name: "bolt",
        type: "turtle",
        age: 112,
        weight: 5.5
    }
];

//Reduce para trazer a soma das idades
const totalAge = pets.reduce((total, pet) => {
    //console.log(`Total: ${total}`)
    //console.log(`Pet: ${pet.name}`)

    return total + pet.age
}, 0)

console.log("\nAge: " + totalAge)

//Reduce para trazer a média do weight
const avgweight = pets.reduce((avg, pet) => {
    //console.log(`Total: ${avg}`)
    //console.log(`Pet: ${pet.name}`)

    return avg + (pet.weight / pets.length)
}, 0)

console.log("\nweight median: " + avgweight.toFixed(2))

// Aqui, mostro como usar o reduce para trazer mais de um objeto
const totalAgeWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, {totalAge: 0, totalWeight: 0})

const avgAgeWeight = pets.reduce((avg, pet) => {
    return {
        avgAge: avg.avgAge + pet.age / pets.length,
        avgWeight: avg.avgWeight + pet.weight / pets.length
    }
}, {avgAge: 0, avgWeight: 0}) // https://stackoverflow.com/questions/60730003/tofixed-after-using-reduce-method-js

console.log(totalAgeWeight)
console.log(avgAgeWeight)

//Utilizando o reduce com condicionais
const somaweightPesado = pets.reduce((soma, pet) => {
    if (pet.weight < 50)
        return soma;
    return (soma + pet.weight).toFixed(2);
}, 0)

console.log("\nweights sum > 50: " + somaweightPesado)

//Encadeando o filter com o reduce
const weightYoungPets = pets
    .filter((pet) => {
        return pet.age < 10
    })
    .reduce((total, pet) => {
        return total + pet.weight
    }, 0)

console.log("\nWeights Sum age < 10 : " + (weightYoungPets).toFixed(2))

//Encadeando o filter com o reduce
const dogs = pets.filter((pet) => pet.type === 'dog')
    .reduce((name, pet) => name + pet.name + ', ', 'dogs: ');
console.log(dogs);


//const totalWeightDogs = pets.filter(pet => pet.type === 'fish');
const totalWeightDogs = pets.filter((pet) => {
    if (pet.type) {
        return pet.type === 'fish';
    } else {
        return pet.type === 'dog'
    }
})

console.log(totalWeightDogs);