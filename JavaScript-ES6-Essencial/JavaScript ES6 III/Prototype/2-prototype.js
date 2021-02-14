'use strict';

/*
// Exemplo da implementação mais simples e antiga de herança.

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug);
*/

// Exemplo de implementação mexendo no prototype.

function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function () {
    console.log('Au! au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
for(let i in pug) {
    console.log(i);
}
