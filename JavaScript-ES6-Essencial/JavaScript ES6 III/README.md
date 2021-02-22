# Aula 3 - Orientação a objetos e Design Patterns com a linguagem ES6

## Introdução a orientação a objetos:

### Herança (Baseada em protótipos | forma mais antiga )

- Protótipos:
    - `prototype`, `__proto__` e `constructor`
- Exemplo:

```JavaScript
    'use strict';
const myText = 'Hello prototype!';
myText.split(''); // <- de onde vem esse "split"?
```

```JavaScript
    'use strict';
const myText = 'Hello prototype!';
console.log(myText.__proto__.split); // f split() { [native code] }
```

---

- `__ proto__ -> prototype -> constructor`:
  `__proto__ ` aponta para o `prototype` e esse `prototype` é criado apartir de uma `função construtora`
  ou seja:

```JavaScript
const myText = 'Hello prototype!';

myText.constructor -> String // meu constructor do myText é uma string
myText.__proto__ -> String.prototype // logo e o proto vai ser igual o String.prototype
```

Função construtora: [exemplo 0-prototype.js](./Prototype/0-prototype.js)

```JavaScript
function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa('Fulano');

console.log(p);
```

- Quando utilizamos o `new`, ele cria um novo objeto passando os parâmetro através da função construtora
- No entanto quando vamos no console e realizamos o `new`, vemos que ao dar `console.log()` no novo objeto criado,
  teremos todas propriedades inclusive o `__proto__`
- Para contornar o retorno do `proto`, sempre iremos utilizar um `return` com as propriedades desejadas de um `new`
  objeto

```JavaScript
new Foo(...);
```

**O que ocorre nos código acima?**

1 - Um novo objeto é criado, herdando Foo.prototype

2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado.

3 - Caso a função construtora tenha um retorno explícito (nosso return), será respeitado o seu 'return'. Senão, será
retornado o objeto criado no `passo 1`.

ou seja:

```JavaScript
function Pessoa(name) {
    this.name = name;
    return {
        nome: 'Teste'
    }; // criando o return desta forma não será retornado o proto
}
```

- Outro exemplo em : [exemplo 1-prototype.js](./prototype/1-prototype.js)

---

- apenas um exemplo de não recomendação:

```JavaScript
  String.prototype.split;
'124646'.split('');
// (6) ["1", "2", "4", "6", "4", "6"]

//quebra a string
String.prototype.split = function () {
    console.log('Ixi..');
}

// ao chamarmos novamente
'124646'.split('');
//teremos "Ixi.." como saída, pois modificamos o prototype da função. Não é recomendado realizar esta ação.
// É recomendado criar a própria definição
```

---

### Herança (Baseada em Classes | forma mais nova )

- Classes:
    - Bem parecido com as implementações de outras linguagens como Java;
- Exemplo da função Animal com classes: [exemplo](./Classes/0-classe.js)

```JavaScript
'use strict';

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro(false);
console.log(pug);
```

[outro exemplo](./Classes/1-classe.js)

---

### Modificadores de Acesso:

- JavaScript não possuí modificadores de acesso (Public, Private, Protect)
- [modificadores de acesso versão nova](./Modificadores/0-modificador.js)
- [modificadores de acesso versão antiga](./Modificadores/1-modificador.js)

### Encapsulamento:

```JavaScript
  'use strict'

function Person(innitialName) {
    var name = innitialName;
    Object.defineProperty(this, 'name', {
        get: function () {
            return name;
        },
        set: function (value) {
            name = value;
        }
    });
}
```

### Static:

```JavaScript
  'use strict';

    function Person() {
    }
    
    Person.walk = function () {
        console.log('walking...');
    }
    console.log(Person.walk());
    'use strict';
    
    class Person {
        static walk() {
            console.log('walking...')
        }
    }
    
    console.log(Person.walk());
```

---
---

## Introdução a Desing Patterns:

- **Padrão de projeto de software (Software design pattern)**
    - É uma solução geral para um problema que ocorre com frequência dentro de um determinado contexto no projeto de
      software.

- **Patterns mais utilizados:**
    - [Factory:](./DesignPatterns/Factory.js) Todas as funções que retornam um objeto sem a necessidade de chama-las com o
      new, são consideradas funções Factory(Fábrica).
    - [Singleton:](./DesignPatterns/Singleton.js) O objetivo desse pattern é criar uma única instância de uma função
      construtora e retorná-la toda vez em que for necessário utiliza-la.
    - [Decorator:](./DesignPatterns/Decorator.js) Uma função decorator recebe uma outra função como parâmetro e estende o
      seu comportamento sem modifica-la explicitamente.
    - [Observer:](./DesignPatterns/Observer.js) É um pattern muito popular em aplicações JavaScript. A instância mantém uma
      coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.
    - [Module:](./DesignPatterns/Module.js) É um pattern que possibilita organizarmos melhor o nosso código sem a
      necessidade de expor variáveis globais.

### Factory:

```JavaScript
    function user(customProperties) {
        return {
            name: 'Fulano',
            lastname: 'Beltrano',
            ...customProperties
        }
    }
    
    const p = pessoas({name: 'Custom-Name', age: 27});
    console.log(p);
```

### Singleton:

```JavaScript
    function pessoa() {
        if(!Pessoa.instance) {
            Pessoa.instance = this;
        }
        
        return Pessoa.instance
    }
    
    const p = Pessoa.call({ name: 'Ciclano'});
    const p2 = Pessoa.call({ name: 'Custom name'});
    
    console.log(p);
    console.log(p2);
```

### Decorator:

```JavaScript
    let loggedIn = false;
    
    function callIfAuthenticated(fn) {
        return !!loggedIn && fn();
    }
    
    function sum(a, b) {
        return a + b
    }
    
    console.log(callIfAuthenticated(() => sum(2, 3)));
    loggedIn = true;
    console.log(callIfAuthenticated(() => sum(2, 3)));
    loggedIn = false;
    console.log(callIfAuthenticated(() => sum(2, 3)));
```

### Observer:

```JavaScript
    class observable {
        constructor() {
            this.observables = [];
        }
        
        subscribe(fn) {
            this.observables.push(fn);
        }
        
        notify(data) {
            this.observables.forEach(fn => fn(data));
        }
        
        unsubscriber(fn) {
            this.observables = this.observables.filter(obs => obs !== fn);
        }
    }
    
    const o = new Observable();
    
    const logData1 = data => console.log(`Subscribe 1: ${data}`);
    const logData2 = data => console.log(`Subscribe 2: ${data}`);
    const logData3 = data => console.log(`Subscribe 3: ${data}`);
    
    o.subscribe(logData1)
    o.subscribe(logData2)
    o.subscribe(logData3)
    
    o.notify('notified 1');
    
    o.unsubscribe(logData2);
    
    o.notify('notified 2');
```

### Module:

```JavaScript
    let name = 'default';
    
    function getName() {
        return name;
    }
    
    function setName(newName) {
        name = newName;
    }
    
    module.exports = {
        getName,
        setName
    };
```