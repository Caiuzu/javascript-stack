this.name = 'Nome no contexto de criacao';
const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());

//o this se comporta diferente no arrow function e no function
// arrow: ele pega o this geral do escopo
// function: pega o this dentro do escopo de onde foi chamado
