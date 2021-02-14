//modificadores de acesso versão antiga
'use strict';

class Person {
    #name = ' ';

    constructor(innitialName) {
        this.#name = innitialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

'use strict'
console.log(p)
p.getName();
p.name;
p.setName('Cristina');
p.getName();
