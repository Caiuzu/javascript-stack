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

const petNames = pets.map((pet) => {
    return pet.name // + ' ' + pet.age
})

console.log(pets);
console.log(petNames);