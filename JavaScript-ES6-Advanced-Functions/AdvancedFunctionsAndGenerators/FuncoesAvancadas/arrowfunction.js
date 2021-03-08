let sum = (a, b) => a + b;
console.log(sum(5, 15));

let sumWithOneParameter = a => a + 10;
console.log(sumWithOneParameter(6));

//retornar objetos
let returnObject = (a, b) => ({a, b});
console.log(returnObject(2, 9));

function persons(name, age) {
    this.name = name;
    this.age = age;
}

console.log(new persons('Fulano', 18));

//métodos
let object = {
    showContext: function showContext() {
        this.log('showContext()');
        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000);
    },
    log: function log(value) {
        console.log(value)
    }
};

object.showContext();