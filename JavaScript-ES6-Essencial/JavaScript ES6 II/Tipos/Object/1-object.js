let user = {
    name: 'Fulano'
};

console.log(user);

//alterando a propriedade de um objeto
user.name = 'Outro nome1';
user['name'] = 'Outro nome2';

const prop = 'name';
user[prop] = 'Outro nome 3';

//criando uma propriedade
user.lastname = 'Beltrano da silva';

//deletando uma propriedade
delete user.name;
