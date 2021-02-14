//prototype com classes
'use strict'

class Animal {
    constructor() {
        this.qtdePatas = 0;
    }

    movimentar() {
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log('Au! Au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
