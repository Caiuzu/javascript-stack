# Aula 2 - Tipos, variáveis, operadores, condicionais e repetição em JavaScript ES6

---
## Tipos e Variáveis:

- **Javascript possui 6 tipos primitivos**:
    - **string**: texto e caracteres
    - **number**: numeros
    - **boolean**: true or false
    - **null**: nulo
    - **undefined**: Quando uma variável existe mas não foi definida ou seta um valor para ela
    - **symbol**: cria novos tipos específicos (criar tipo um enum por exemplo)


- **Object**: Um objeto é uma coleção de propriedades e uma propriedade é uma associação entre um nome (ou chave) e um valor
- **Function**: também é um objeto que permite a invocação de um Object
- **Array**: é um objeto que tem relação com seus filhos

### String
- Exemplo: [Código](./Tipos/String/string.js)
```JavaScript
// Retorna o tamanho de uma String
const textSize = 'texto';
const textSize = 'texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splitedText);

// Busca por um valor e substitui por outro
const replaceText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituicao de valor:', replacedText);

// Retorna a "Fatia" de um valor
const replacedText = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string:', lastChair);

const allWithputLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a ultima', allWithputLastChar);

const secondtoEnd = 'Texto'.slice(1);
console.log('\nValor da string da primeira letra menos a ultima:', secondtoEnd);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', twoCharsBeforeFirstPos);
```

### Number
- Exemplo: [Código](./Tipos/Number/number.js)
```JavaScript
const myNumber = 12.4032;

// Transformar numero para string
const numberAsString = myNumber.toString();
console.log('Numero transformado em string: ', typeof numberAsString);

// Retorna numero com um numero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com duas casas decimais', fixedTwoDecimals);

// Transforma uma string em um float
console.log('\nString parseada para float:', parseFloat('13.22'));

// Transforma uma string em int
console.log('\String parseada para int:', parseInt('13.20'));
```

### Null 
- Exemplo: [Código](./Tipos/Null/null.js)
```JavaScript
const nullVariable = null;
console.log(typeof nullVariable);
```

### Boolean 
- Exemplo: [Código](./Tipos/Boolean/boolean.js)
```JavaScript
const isActive = false;
console.log('Tipo da variavel', typeof isActive);
```

### Object 
- Exemplo 1: [Código](./Tipos/Object/1-object.js)
```JavaScript
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
```
- Exemplo 2: [Código](./Tipos/Object/2-object.js)
```JavaScript
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
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj apos as alteracoes:', newObj);

// Permite apenas a alteracao de propriedades existentes em um objeto

const person = { name: 'Fulano' };
Object.seal(person);

person.name = 'Fulano Beltrano';
delete person.name;
person.age = 26;

console.log('\nVariavel person apos alteracoes:', person);

```

### Symbol
- Exemplo: [Código](./Tipos/Symbol/symbol.js)
```JavaScript
const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol1 é igual a symbol2:, symbol1 === symbol2);

// Previnir conflitos entro nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Fulano',
    [nameSymbol2]: 'Outro nome',
    lastname: 'Beltrano da silva'
}

console.log(user);

// Symbols criam propriedades que nao sao enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(´\nValor da chave ${key}: ${user[key]}´);
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP  : Symbol( 'UP' ),
    DOWN    : Symbol( 'DOWN' ),
    LEFT    : Symbol( 'LEFT' ),
    RIGHT   : Symbol( 'RIGHT' )
};
```

---
---

## Functions e Operadores:

array e functions...

