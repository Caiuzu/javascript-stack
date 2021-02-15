//modificadores de acesso versão com function
'use strict';

function Person(innitialName) {

    let name = innitialName;

    this.getName = function () {
        return name;
    }

    this.setName = function (newName) {
        name = newName;
    }
}

const p = new Person('Bruna');

console.log(p);
console.log(p.getName());

p.setName('Cristina');
console.log(p.getName());
