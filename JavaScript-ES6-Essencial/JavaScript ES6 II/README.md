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

### Operadores Aritiméticos:
```JavaScript
  // Módulo (%)
  // Operador binário. Retorna o inteiro restante da divisão dos dois operandos.
  12 % 5 // retorna 2.
  
  // Incremento (++) e Decremento (--)
  ++x
  X++
  
  const a = ++2; // 3
  const b = 2++; // 2
  
  --x;
  x--;
  
  // Negação (-) e Adição (+)
  -3
  +"3"    // retorna 3
  +true   // retorna 1
  +false  // retorna 0
  -true   // retorna -1
  
  // Operador de exponenciação (**)
  2 ** 3   // retorna 8
  10 ** -1 // retoarna 0.1
  
  // Operador de agrupamento ()
  2 * (3 + 2)
```

### Operadores de atribuição:
```JavaScript
// Atribuição
x = y

// Atribuição de adição
x = x + y
x += y

// Atribuição de subtração
x = x - y //ou
x -= y

// Atribuição de multiplicação
x= x * y // ou
x *= y

//Atribuição de divisão
x = x / y //ou
x /= y

//Atribuição de resto
x = x % y // ou
X %= y
```
### Operadores de comparação:
```JavaScript

// Igual (==)
// Retorna verdadeiro caso os operandos sejam iguais. 3 == var1
"3" == var1
3 == '3'

// Não igual (!=)
// Retorna verdadeiro caso os operandos não sejam iguais. var' != 4
var2 != "3"

// Estritamente igual (===)
// Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Veja tambem Object.is e igualdade
3 === var1

// Estritamente não igual (!==)
// Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo
3 === var1
3 !== '3'

// Maior que (>)
// Retorna verdadeiro caso o operando da esquerda seja maior que o da direita
var2 > var1
"12" > 2

// Maior que ou igual (>=)
// Retorna verdadeiro caso o operando da esquerda seja maior ou igual que ao da direita
var2 >= var1
"12" >= 3

// Menor que (<)
// Retorna verdadeiro caso o operando da esquerda seja Menor que o da direita
var2 < var1
"12" < "2"

// Menor que ou igual (<=)
// Retorna verdadeiro caso o operando da esquerda seja Menor ou igual que ao da direita
var2 <= var1
"12" <= 5

```

### Operadores de condicionais (ternário):
```JavaScript
condicao ? valor1 : valor2

true ? 'foo' : 'bar'    // retorna 'foo'
false ? 'foo' : 'bar'   // retorna 'bar
```

### Operadores de lógicos:
```JavaScript
// And lógico (&&)
exp1 && exp2

var a1 =  true && true;      // t && t retorna true
var a2 =  true && false;     // t && t retorna false
var a3 =  false && true;     // t && t retorna false
var a4 =  false && (3 == 4); // t && t retorna false
var a5 =  "Gato" && "Cão";   // t && t retorna Cão
var a6 =  false && "Gato";   // t && t retorna false
var a7 =  "Gato" && true;    // t && t retorna false


// OR lógico (||)
exp1 || exp2

var a1 =  true || true;      // t || t retorna true
var a2 =  true || false;     // t || t retorna true
var a3 =  false || true;     // t || t retorna true
var a4 =  false || (3 == 4); // t || t retorna false
var a5 =  "Gato" || "Cão";   // t || t retorna Gato
var a6 =  false || "Gato";   // t || t retorna Gato
var a7 =  "Gato" || true;    // t || t retorna Gato

// NOT lógico (!)
!exp1

var n1 =  !true;   // !t retorna false
var n2 =  !false;  // !t retorna true
var n3 =  !"Gato"; // !t retorna false

// True
" " //isso retonaria 1 por conta do espaço, pois é considerado com 

```
### Spread

```JavaScript
var partes = ['ombro','joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés'];// este objeto, teoricamente para o sistema, está como na linha abaixo
var musica = ['cabeça','ombro','joelhos', 'e', 'pés']; // assim, onde ...partes torna-se 'ombro','joelhos', basicamente

function fn(x, y, z){ } 
var args = [0, 1, 2];
fn(...args); // Em funções, cada item será passado como parâmetros um a um x receberá 0, y receberá 1 e z receberá 2
// ou seja, não precisaria utilizar um for para relacionar cada parâmetro a um valor de entrada de um objeto/array
```

### Operadores unitários:
```JavaScript
// Deletar algo
delete something;

// Deletar tipo
typeof something;
```

### Operadores binários:
```JavaScript
// in
something in something

// Arrays - basicamente se algo existe dentro de um objeto, array
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro')
0 in arvores // retorn true
3 in arvores // retorn true
6 in arvores // retorna false

'cedro' in arvores // retorna false ( você deve especificar o número do índice, não o valor naquele índice)
'cedro' in arvores[2] // retorna true ( você deve especificar o número do índice, não o valor naquele índice)

'length' in arvores // retorna true (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in math // retorna true
var minhaString = new String("coral")
'length' in minhaString // retorna true

// Objetos personalizados
var meucarro = {marca: 'Honda', modelo: 'Accord', ano: 1998}
'marca' in meucarro // retorna true
'modelo' in meucarro // retorna true

// instaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17)

if (dia instanceof Date) {
  // code here
}
```

## Condicionais:

### if:
- [exemplo prático de if](./Condicionais/if-else/if.js)

```JavaScript

  if (condition) {
  // code
  } else {
   //code
  }

```

### if-else:
- [exemplo prático de else if](./Condicionais/if-else/else-if.js)

```JavaScript

if (condition) {
    //code
} else if (condition) {
    // code
}

```


### switch:
- [exemplo prático de switch](./Condicionais/switch-case/swtich.js)

```JavaScript


switch (expressão) {
    case valor1:
        break;
    case valorn:
        break;
    default:
        break;
}

```

## Estrutura de Repetição:

### for:
- [exemplo prático de for](./EstruturasDeRepeticao/for/for.js)
```JavaScript

for ([explessãoInicial]; [condição]; [incremento]) {
    // Declaração
}

```

### for-in:
- [exemplo prático de for-in](./EstruturasDeRepeticao/for/for-in.js)
```JavaScript

for(let item in objeto) { // executará exibindo todas as PROPRIEDADES do objeto/array (objeto.foo por exemplo apareceria)
    console.log(item);
}

for(let item of objeto) { // já o of, demonstra apenas os enumerados ou seja, as posições dentro do array: objeto[0]
  console.log(item);
}

```

### while:
- [exemplo prático de while](./EstruturasDeRepeticao/while/while.js)
```JavaScript

while (condição) {
    declaração
}

```

### do-while:
- [exemplo prático de do-while](./EstruturasDeRepeticao/while/do-while.js)
```JavaScript

do {
    declaração
} while (condição)

```
### Controle de Repetição:
- [Exemplo da utilização de break](./EstruturasDeRepeticao/controleRepeticao/controleRepeticao.js)
- [Exemplo da utilização de continue](./EstruturasDeRepeticao/controleRepeticao/controleRepeticao.js)

---
---
## Exercícios de Fixação:


**1** - Nos jogos é comum que cada personagem possua atributos para enfrentar os diversos desafios durante as aventuras. Observe o seguinte trecho de código:

```JavaScript
  let personagem = {
    velocidade : 9,
    poder : 15,
    sorte : 20
  }
```
Qual alternativa abaixo **não** representa uma opção de código válido no objeto personagem?

 **a)** `Object.keys(personagem);`

 **b)** `Object.personagem(velocidade);` 

 **c)** `Object.freeze(personagem);`

 **d)** `Object.assign(personagem, {esquiva: 2});`

 **e)** `Object.entries(personagem);` 

<details>
<summary>Resposta:</summary>

```JavaScript
  Object.personagem(velocidade); // Forma inválida
```
</details>

---

**2** - Observe o seguinte trecho de código:

```JavaScript
  const bandas = [
  {
    name: 'The Who',
    genero: 'Rock'
  },
  {
    name: 'Queen',
    genero: 'Rock'
  },
  {
    name: 'Lenine',
    genero: 'MPB'
  },
  {
    name: 'Tim Maia',
    genero: 'MPB'
  }
];
```
Com base no código acima, se você quiser recuperar apenas bandas de um determinado gênero, qual seria o código correto?

**a)** `const mpb = bandas.filter(bandas === 'MPB');`

**b)** `const soul = bandas.filter(bandas.genero => 'Soul');`

**c)** `const rock = bandas.filter(bandas => bandas.genero === 'Rock');`

**d)** `const sertanejo = bandas.filter(bandas => 'Sertanejo');`

**e)** `const pop = bandas.filter(bandas === bandas.genero === 'Pop');`

<details>
<summary>Resposta:</summary>

```JavaScript
  const rock = bandas.filter(bandas => bandas.genero === 'Rock');
```
</details>

---

**3** - A variável do tipo string possui recursos como "length", "split", "replace", "slice", "substr" e entre outras. Sobre o recurso "replace", vale notar que ele substitui apenas o primeiro termo pelo novo termo, portanto ele não substitui todos os termos encontrados na string, a menos que isso seja feito em um loop. Observe o seguinte trecho de código:

```JavaScript
  const frase = "Science without religion is lame, religion without science is blind."
  frase.replace("without", "with");
```
Com base no contexto, como estaria a frase corretamente?

**a)** `"Science out religion is lame, religion without science is blind."`

**b)** `"Science with religion is lame, religion with science is blind."`

**c)** `["Science", "with", "religion", "is", "lame", "religion", "without", "science", "is", "blind."]`

**d)** `"Science with religion is lame, religion without science is blind."`

**e)** `"Science without religion is lame, religion with science is blind."`

<details>
<summary>Resposta:</summary>

```JavaScript
  "Science with religion is lame, religion without science is blind."
```
</details>

---

**4** - Qual das alternativas abaixo está correta?

```
I - O comando object.freeze não permite a criação, alteração nem a remoção de propriedades.
II – O comando object.seal não permite que a propriedade seja deletada nem criada.
III – Para trocar o valor de uma propriedade que já existe é usado o comando object.foo.
```


**a)** `Todas estão corretas.`

**b)** `Apenas II está errada.`

**c)** `Apenas III está errada.`

**d)** `Apenas III está correta.`

**e)** `Apenas II e III estão corretas.`

<details>
<summary>Resposta:</summary>

```JavaScript
  "Apenas III está errada."
```
</details>

---

**5** - Qual a finalidade do operador `typeof`?

**a)** `O typeof é um operador unário que retorna em um string indicado um tipo de operando.`

**b)** `Nenhuma das alternativas.`

**c)** `O typeof é um operador que executa operadores de tipo específico.`

**d)** `O typeof é um operador unário que executa operadores através de strings.`

**e)** `O typeof é um operador binário que fica depois do seu operando.`

<details>
<summary>Resposta:</summary>

```JavaScript
  "O typeof é um operador unário que retorna em um string indicado um tipo de operando."
```
</details>

---

**6** - O número pi é obtido quando se divide o perímetro pelo diâmetro, sendo representado por um número infinito de casas decimais, o que seria inadmissível escrever aqui. Para facilitar, podemos usar qual comando da variável numérica para escrever apenas algumas casas decimais? Considere que o valor esteja em uma variável chamada "numeroPi".

**a)** `numeroPi = numeroPi.toFixed(7), para retornar "3,14159"`

**b)** `numeroPi = numeroPi.toString(2), para retornar "3,14"`

**c)** `numeroPi = numeroPi.toFixed(3), para retornar "3,14"`

**d)** `numeroPi = numeroPi.parseFloat(numeroPi);`

**e)** `numeroPi = numeroPi.toFixed(2), para retornar "3,14"`

<details>
<summary>Resposta:</summary>

```JavaScript
  numeroPi = numeroPi.toFixed(2); //para retornar "3,14"
```
</details>

---

**7** - Observe os seguintes exemplos:

```JavaScript
    const filmes = ['Meia-noite em Paris', 'Machete', 'Taxi Driver', 'Matrix'];
```

Assinale abaixo a estrutura de repetição correta que poderia listar os filmes da lista.

**a)** `for(let filmes in filme)`

**b)** `for(let filmes of filme)`

**c)** `while(filmes.length)`

**d)** `do{filmes += 1} while (filmes.length < 4)`

**e)** `for(let index = 0; index < filmes; index++)`

<details>
<summary>Resposta:</summary>

```JavaScript
  for(let filmes of filme){}
```
</details>

---

**8** - Qual comando deve ser usado para que o objeto não sofra mudança sob nenhuma circunstância?

**a)** `stay.object();`

**b)** `object.stay();`

**c)** `obj.quaxxor();`

**d)** `object.freeze();`

**e)** `freeze.object();`

<details>
<summary>Resposta:</summary>

```JavaScript
  object.freeze();
```
</details>

---

**9** - Leia as sentenças e assinale a alternativa correta.

```
  I – Operadores unários de negação não retornam a negação do seu operando. 
 II – Operadores binários retornam o resultado da divisão de dois operandos.
III – Operadores unários possuem apenas um operando, que podem vir antes ou depois do operador.
```

**a)** `Apenas III está correta.`

**b)** `Todas estão corretas.`

**c)** `Apenas II e III estão erradas.`

**d)** `Apenas I e II estão corretas.`

**e)** `Apenas I está errada.`


<details>
<summary>Resposta:</summary>

```JavaScript
  "Apenas I está errada."
```
</details>

---

**10** - Nomes de filósofos gregos muitas vezes são parecidos e é possível até fazer rimas com eles, mesmo que seus ideais podiam não ser totalmente compatíveis. Observe o seguinte trecho de código:

```JavaScript
    const filosofo = "Sócrates";
```

Para trocarmos "Sócrates" por "Hipócrates", qual código abaixo usaríamos?

**a)** `filosofo = "Não entendo de filosofia";`

**b)** `filosofo = filosofo.replace("Hipó","Só");`

**c)** `filosofo = filosofo.substr(2,7) + "Hipó";`

**d)** `filosofo = "Hipó" + filosofo.substr(2,7);`

**e)** `filosofo = "Hipó" + filosofo.split(2,7);`

<details>
<summary>Resposta:</summary>

```JavaScript
  filosofo = "Hipó" + filosofo.substr(2,7);
```
</details>
