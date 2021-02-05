const users = ['Caio', 'Amanda', 'Oberdan'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Caio',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Oberdan',
        age: 18,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

// Verificar se é array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

// Filtrar array (não altera a referencia do nosso objeto, ele cria um novo a partir do existente porém "filtrado")
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo (não altera a referencia do nosso objeto)
const personsWithCourse = persons.map(person => {
    person.course = 'Introducao ao JavaScript';
    return person;
});

console.log('\nPessoas com a edicao do course', personsWithCourse);

// Transformar um array em outro tipo (não altera a referencia do nosso objeto)
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0); // como recebe 0, ele vai retornar um number

console.log('\nSoma de idade das pessoas', totalAge);

// Juntado operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0) // faz uma análise para descobrir as idades pares e assim passar para o reduce somente quem tem a person.age par
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0); // caso mude para {}, [], {x: 'y'}, '', ele irá modificar o tipo do primeiro parâmetro/retorno(age) de acordo com o definido

// filter se comporta como um if
