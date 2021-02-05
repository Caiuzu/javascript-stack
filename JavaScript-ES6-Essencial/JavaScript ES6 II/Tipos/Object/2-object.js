const user = {
    name: 'Fulano',
    lastname: 'Beltrano da silva'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nLista de propriedades do objeto user', Object.values(user));

// Retorna um valor array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Fulano Beltrano da silva'});

console.log('\nAdiciona a propriedade fullname no objeto user', user);
console.log('\nRetorna um novo objeto mergeado dois ou mais objetos', Object.assign({}, user, {age: 26}));

// Previne todas as alteracoes em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj apos as alteracoes:', newObj);

// Permite apenas a alteracao de propriedades existentes em um objeto
const person = {name: 'Fulano'};
Object.seal(person);

person.name = 'Fulano Beltrano';
delete person.name;
person.age = 26;

console.log('\nVariavel person apos alteracoes:', person);
