const user = customProperties => ({
    name: 'Fulano',
    lastname: 'Beltrano',
    ...customProperties
});

let person = user({name: 'Custom-Name', age: 27});

console.log(person);

// let serializedJson = JSON.stringify(person);
// console.log(serializedJson);
//
// let jsonParsed = JSON.parse(serializedJson);
// console.log(jsonParsed);