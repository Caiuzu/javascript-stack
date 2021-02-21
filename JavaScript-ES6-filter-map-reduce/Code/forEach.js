const pets = [
    {
        name: "snoop",
        type: "dog",
        age: 9,
        weight: 15.0
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

// const forEachPetNames = pets.forEach((pet) => {
//     return pet.name
// }); //undefined

// realizando a mesma operação que o map
const forEachPetNames = []
pets.forEach((pet) => {
    forEachPetNames.push(pet.name);
});

console.log(forEachPetNames);
console.log(pets);