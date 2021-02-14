'use strict'
function Animal(){
    this.qtdePatas = 4;
}
console.log(Animal.constructor);

//function
const cachorro = new Animal();

console.log(cachorro instanceof Animal);
//true
console.log(cachorro instanceof Function);
//false

