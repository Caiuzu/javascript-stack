// function Pessoa(name) {
//     this.name = name;
// } //dessa forma será retornada o proto

function Pessoa(name) {
    this.name = name;
    return {
        nome: 'Teste'
    }; // criando o return desta forma não será retornado o proto
}

const p = new Pessoa('Fulano');

console.log(p);
