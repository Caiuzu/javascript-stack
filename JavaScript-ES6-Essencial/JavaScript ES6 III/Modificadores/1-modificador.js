//modificadores de acesso versão com class
'use strict';

class Person {
    #name = ' ';
    #telefone = '';

    constructor(innitialName) {
        this.#name = innitialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setTelefone(tel) {
        if (tel.length < 9) {
            console.log("Numero incorreto");
        } else {
            this.#telefone = tel;
            console.log("Numero cadastrado");
        }
    }

    getTelefone() {
        return this.#telefone;
    }

}

const p = new Person('Fulano');

p.setTelefone('999999999');
console.log(p.getTelefone());

console.log(p.getName());
