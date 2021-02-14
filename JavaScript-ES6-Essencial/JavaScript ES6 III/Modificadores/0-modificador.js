//modificadores de acesso versão nova
'use strict';

function Person(innitialName) {
    let name = innitialName;
    this.getName = function () {
        return name;
    }
    this.setName = function (newName) {
        name = newname;
    }
}

const p = new Person('Bruna');
'use strict'
console.log(p);
p.getName();
p.name;
p.setName('Cristina');
p.getName;
