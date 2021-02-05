const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// Previnir conflitos entro nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Fulano',
    [nameSymbol2]: 'Ciclano',
    lastname: 'Bertrano da silva'
}

console.log(user);

// Symbols criam propriedades que nao sao enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave, ${key}:${user[key]}`);
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};
