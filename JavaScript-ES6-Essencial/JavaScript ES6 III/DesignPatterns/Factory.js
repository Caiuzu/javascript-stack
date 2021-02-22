function user(customProperties) {
    return {
        name: 'Fulano',
        lastname: 'Beltrano',
        ...customProperties
    }
}

const p = user({name: 'Custom-Name', age: 27});
console.log(p);