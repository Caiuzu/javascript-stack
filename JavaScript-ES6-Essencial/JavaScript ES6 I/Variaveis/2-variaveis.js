const name = 'Fulano';

// Não podemos alterar o valor
// name = 'Fulano';

const user = {
    name: 'Fulano'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

// Não podemos fazer o objeto "apontar" para outro lugar
// user = {
//     name: 'Fulano'
// };

const persons = ['Fulano', 'Ciclano', 'Beltrano'];

// Podemos adicionar novos itens
persons.push('Outrano');

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = 'Robson';

console.log('\nArray após as alterações: ', persons);
