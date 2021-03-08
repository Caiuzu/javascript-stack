## Aula 5 - Conceitos aplicados a qualidade de código e automação de testes em JS

### Testes, TDD e BDD

#### Testes

##### Testes automatizados

- Testes unitários;
- Testes integrados;
- Testes funcionais.

##### Testes manuais e automatizados

- Testes usabilidade;
- Testes de aceitação do usuário;
- Protótipos;
- Testes funcionais;

##### Ferramentas de testes

- Teste de carga e performance;
- Testes de segurança

#### TDD (Test Driven Development)

É um dos pilares do Extreme Programing, consiste em testar e refatorar em pequenos ciclos, onde você escreve o teste
antes do código, faz o meso passar e refatorar o código.

Etapas

- Escrita do testes
- Escrita do código
- Refatoração

Vantagens

- Feedback rápido;
- Maior segurança em alterações e novas funcionalidades;
- Código mais limpo;
- Produtividade.

#### BDD (Behavior Drive Development)

Técnica de desenvolvimento ágil que visa integrar regras de negócio com linguagens de programação.

Pilares

- Testes;
- Documentação;
- Exemplos.

Vantanges

- Compartilhamento de conhecimento;
- Documentação dinâmica;
- Visão do todo.

---

### Conheça Mocha, Chai e Sinon

#### [Mocha](./test)

```javascript
// inicializando
// criando o projeto testes
npm
init - y
// adicionando o mocha
npm
i--
save - dev
mocha
// alterar o package.json scripts.test para "mocha"
// para executar os testes
npm
run
test
```

```javascript
// criar o diretório src
// criar o arquivo math.js

// math.js
class Math {
    sum = function sum(a, b) {
        return a + b;
    }

    multiply = function multiply(a, b) {
        return a * b;
    }
}

module.exports = Math;
```

```javascript
// math.spec.js
// Não possui uma ferramenta de *assert*
// E o *assert* é um pouco limitado, como alternativa temos o *chai*
const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

describe('Math class', function () {
    // hooks
    // permitir reiniciar uma variável antes de cada teste
    beforeEach(function () {
        value = 0;
    })

    // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
    // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
    it('Sum two numbers', function (done) {
        const math = new Math();

        // é possível alterar o timeout do mocha, o padrão é 2000ms.
        this.timeout(3000);

        value = 0;

        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });

    // mocha permite deixar anotado os testes futuros
    // it('Multiply two numbers');

    // mocha executa apenas esse teste
    // it.only('Multiply two numbers', function() {});

    // mocha desconsidera esse teste
    // it.skip('Multiply two numbers', function() {});

    it('Multiply two numbers', function () {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });
});
```

---

### Veja como traballha com Chai

### Chai

Ferramenta de *assert* de uma maneira mais descritiva

```javascript
// instalando o chai
npm
i--
save - dev
chai
```

```javascript
// math.spec.js
const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function () {
    // hooks
    // permitir reiniciar uma variável antes de cada teste
    beforeEach(function () {
        value = 0;
    })

    // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
    // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
    it('Sum two numbers', function (done) {
        const math = new Math();

        // é possível alterar o timeout do mocha, o padrão é 2000ms.
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            // assert
            // assert.equal(value, 10);

            // chai
            expect(value).to.equal(10);
            done();
        });
    });

    // mocha permite deixar anotado os testes futuros
    // it('Multiply two numbers');

    // mocha executa apenas esse teste
    // it.only('Multiply two numbers', function() {});

    // mocha desconsidera esse teste
    // it.skip('Multiply two numbers', function() {});

    it('Multiply two numbers', function () {
        const math = new Math();

        // é possível alterar o timeout do mocha, o padrão é 2000ms.
        this.timeout(5000);
        // assert
        // assert.equal(math.multiply(value, 5), 0);

        // chai
        expect(math.multiply(value, 5)).to.equal(0);
    });

    // chai comparando propriedades de objetos
    it('Compare property name of objects', function () {
        const obj = {
            name: 'Daniel'
        };

        // chai
        expect(obj)
            .to.have.property('name')
            .equal('Daniel');
    });

    // chai comparando objetos
    it.only('Compare objects', function () {
        const obj = {
            name: 'Daniel'
        };

        const obj2 = {
            name: 'Daniel'
        };

        // chai
        expect(obj).to.deep.equal(obj2);
    });
});
```

---

### Desenvolvendo códigos com Sinon

Ferramenta para *mockar* funções, métodos, API.

```javascript
// instalando o sinon
npm
i--
save - dev
sinon
```

```javascript
// acrescentamos o método printSum

// math.js
class Math {
    sum = function sum(a, b) {
        return a + b;
    }

    multiply = function multiply(a, b) {
        return a * b;
    }

    printSum(req, res, a, b) {
        res.load('index', a + b);
    }
}

module.exports = Math;
```

```javascript
// math.spec.js

const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function () {
    // hooks
    // permitir reiniciar uma variável antes de cada teste
    beforeEach(function () {
        value = 0;
    })

    // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
    // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
    it('Sum two numbers', function (done) {
        const math = new Math();

        // é possível alterar o timeout do mocha, o padrão é 2000ms.
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            // assert
            // assert.equal(value, 10);

            // chai
            expect(value).to.equal(10);
            done();
        });
    });

    // mocha permite deixar anotado os testes futuros
    // it('Multiply two numbers');

    // mocha executa apenas esse teste
    // it.only('Multiply two numbers', function() {});

    // mocha desconsidera esse teste
    // it.skip('Multiply two numbers', function() {});

    it('Multiply two numbers', function () {
        const math = new Math();

        // é possível alterar o timeout do mocha, o padrão é 2000ms.
        this.timeout(5000);
        // assert
        // assert.equal(math.multiply(value, 5), 0);

        // chai
        expect(math.multiply(value, 5)).to.equal(0);
    });

    // chai comparando propriedades de objetos
    it('Compare property name of objects', function () {
        const obj = {
            name: 'Daniel'
        };

        // chai
        expect(obj)
            .to.have.property('name')
            .equal('Daniel');
    });

    // chai comparando objetos
    it('Compare objects', function () {
        const obj = {
            name: 'Daniel'
        };

        const obj2 = {
            name: 'Daniel'
        };

        // chai
        expect(obj).to.deep.equal(obj2);
    });

    // sinon para mockar função
    it.only('Calls req with sum and index values', function () {
        const req = {};
        const res = {
            // função espiã que diz se a função da classe foi ou não executada
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        // chai e sinon
        // verifica se função foi chamada
        expect(res.load.calledOnce).to.be.true;

        // chai e sinon
        // verifica se o segundo argumento é o resultado da soma dos dois valores enviados
        // expect(res.load.args[0][1]).to.equal(10);
    });
});
```