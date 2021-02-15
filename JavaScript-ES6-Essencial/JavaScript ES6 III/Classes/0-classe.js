'use strict';

 class Animal {
    constructor(cor, tamanho, morde) {
        this.qtdePatas = 4;
        this.cor = cor;
        this.tamanho = tamanho;
        this.morde = morde;
    }
}

class Cachorro extends Animal {
    constructor(late, cor, tamanho) {
        super(cor, tamanho, true);
        this.alimentacao = 'Carnivoro';
        this.late = late;
    }
}

const pug = new Cachorro(false, 'branco', 'pequeno');
console.log(pug);
